import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/userService/user.service';
import { AuthenticationService } from '../../../services/authenticationService/authentication.service';
import { UserConnectionEventService } from '../../../services/events/user-connection-event.service';
import { CategoryService } from '../../../services/categoryService/category.service';
import { Category } from '../../../models/category';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  private isUserConnected: boolean;
  private categoryList: Category[];

  constructor(private categoryService: CategoryService,private userConnectiviytEventService: UserConnectionEventService,private userService: UserService, private authService: AuthenticationService) { }

  ngOnInit() {
    this.isUserConnected = this.userService.isUserLoggedIn();
    this.categoryList = [];
    this.getUserCategories();
    this.userConnectiviytEventService.userConnectionChanged.subscribe(isConnected => {
      this.isUserConnected = isConnected;
      this.getUserCategories();
    })
  }

  private logOut() {
    this.authService.logout();
  }

  private getUserCategories() {
    if(!this.isUserConnected) {
      return;
    }
    this.categoryService.getCategoriesByUser().subscribe(response=>{
      for (let category of response) {
        let permittedUsers: string[] = [];
        if(response.permittedUsers != undefined)
          permittedUsers = category.permittedUsers.split(",");
        this.categoryList.push(new Category(category._id, category.name, category.description, permittedUsers, category.createdBy));
      }
    })
  }
}
