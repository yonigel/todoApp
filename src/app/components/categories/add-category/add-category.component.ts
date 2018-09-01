import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CategoryService } from '../../../services/categoryService/category.service';
import { Category } from '../../../models/category';
import { CategoriesEventsService } from '../../../services/events/categories-events.service';
import { UserService } from '../../../services/userService/user.service';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  private addCategoryFormGroup;
  private categoryAdded: boolean;
  private categoryAddedError: boolean;
  private categoryAddedErrorMessage: string;

  constructor(private userService: UserService, private formBuilder: FormBuilder, private categoryService: CategoryService, private categoriesEventsService: CategoriesEventsService) { }

  ngOnInit() {
    this.categoryAddedError = false;
    this.categoryAdded = false;
    this.addCategoryFormGroup = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['']
    })
  }

  private onCategoryAddSubmit() {
    let createdBy = this.userService.getConnectedUsername();
    let category = new Category('', this.addCategoryFormGroup.controls.name.value, this.addCategoryFormGroup.controls.description.value, [], createdBy); 
    this.categoryService.createCategory(category).subscribe(response=>{
      if(response.status == 'succeeded') {
        this.categoryAdded = true;
        this.categoriesEventsService.setCategoryListChanghed();

      }
      else if(response.status == 'succeeded') {
        this.categoryAdded = false;
        this.categoryAddedError = true;
        this.categoryAddedErrorMessage = response.message;
      }
    })
  }

}
