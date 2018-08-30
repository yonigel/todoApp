import { Component, OnInit } from '@angular/core';
import { UserService } from '../../../services/userService/user.service';
import { AuthenticationService } from '../../../services/authenticationService/authentication.service';
import { UserConnectionEventService } from '../../../services/events/user-connection-event.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private isUserConnected: boolean

  constructor(private userConnectiviytEventService: UserConnectionEventService,private userService: UserService, private authService: AuthenticationService) { }

  ngOnInit() {
    this.isUserConnected = this.userService.isUserLoggedIn();
    this.userConnectiviytEventService.userConnectionChanged.subscribe(isConnected => {
      this.isUserConnected = isConnected;
    })
  }

  private logOut() {
    this.authService.logout();
  }

}
