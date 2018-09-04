import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/userService/user.service';
import { AuthenticationService } from '../../../services/authenticationService/authentication.service';
import { UserConnectionEventService } from '../../../services/events/user-connection-event.service';
import { CategoryService } from '../../../services/categoryService/category.service';
import { Category } from '../../../models/category';
import { CategoriesEventsService } from '../../../services/events/categories-events.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {


  private isUserConnected: boolean;
  private observableCategoryList: Observable<any>;

  constructor(private categoryService: CategoryService,private userConnectiviytEventService: UserConnectionEventService,private userService: UserService, private authService: AuthenticationService, private categoriesEventsService: CategoriesEventsService) { }

  ngOnInit() {
    this.observableCategoryList = this.categoryService.getCategoriesByUser();
    this.isUserConnected = this.userService.isUserLoggedIn();
    this.userConnectiviytEventService.userConnectionChanged.subscribe(isConnected => {
      console.log(`user connection is ${isConnected}`);
      this.isUserConnected = isConnected;
      this.observableCategoryList = this.categoryService.getCategoriesByUser();
      
    });
    this.categoriesEventsService.categoryListChanged.subscribe(()=>{
      this.observableCategoryList = this.categoryService.getCategoriesByUser();
    })
  }

  private logOut() {
    this.authService.logout();
  }

}
