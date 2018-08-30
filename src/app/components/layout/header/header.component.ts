import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/userService/user.service';
import { AuthenticationService } from '../../../services/authenticationService/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private isUserConnected: boolean

  constructor(private userService: UserService, private authService: AuthenticationService) { }

  ngOnInit() {
    this.isUserConnected = this.userService.isUserLoggedIn();
  }

  private logOut() {
    this.authService.logout();
  }

}
