import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../../../services/categoryService/category.service';
import { ActivatedRoute } from '@angular/router';
import { Category } from '../../../models/category';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserService } from '../../../services/userService/user.service';

@Component({
  selector: 'app-category-preview',
  templateUrl: './category-preview.component.html',
  styleUrls: ['./category-preview.component.css']
})
export class CategoryPreviewComponent implements OnInit {

  private selectedCategory: Category;
  private addPermittedUserFormGroup;
  private addedUserError: boolean;
  private addedUserErrorMessage: string;

  constructor(private userService: UserService, private categoryService: CategoryService, private route: ActivatedRoute, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addedUserError = false;
    this.addedUserErrorMessage = '';
    this.route.queryParams.subscribe(selectedCategory =>
      this.categoryService.getCategoryById(selectedCategory.categoyId).subscribe(category => {
        this.setSelectedCatgory(category);
      })
    );
    this.addPermittedUserFormGroup = this.formBuilder.group({
      username: ['']
    });
  }

  private setSelectedCatgory(category) {
    let permittedUsers: string[] = [];
    if(category.permittedUsers != undefined) {
      permittedUsers = category.permittedUsers.split(","); 
    }
    this.selectedCategory = new Category(category._id, category.name, category.description, permittedUsers, category.createdBy);
  }

  private removePermittedUser(user) {
    this.categoryService.removePermittedUser(user, this.selectedCategory).subscribe(response => {
      this.setSelectedCatgory(response);
    });
  }

  private addUser() {
    this.userService.getSingleUserByUsername(this.addPermittedUserFormGroup.controls.username.value).subscribe(response => {
      if(response.status == 'error') {
        this.addPermittedUserError(response.message);
        return;
      }
      else {
        console.log(response);
        this.categoryService.addPermittedUser(this.addPermittedUserFormGroup.controls.username.value, this.selectedCategory).subscribe(response=>{
          if(response.status == 'error') {
            this.addPermittedUserError(response.message);
          }
          else {
            this.addedUserError = false;
            this.setSelectedCatgory(response);
          }
        });
      }
    });
    
    
  }

  private addPermittedUserError(message: string) {
    this.addedUserError = true;
    this.addedUserErrorMessage = message;
  }

}
