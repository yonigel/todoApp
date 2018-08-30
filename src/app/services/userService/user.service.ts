import { Injectable } from '@angular/core';
import { UserConnectionEventService } from '../events/user-connection-event.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private isUserConnected: boolean;

  constructor(private userConnectivityEventService: UserConnectionEventService) {
    this.isUserConnected = localStorage.getItem('currentUser') ? true : false; 
    this.userConnectivityEventService.userConnectionChanged.subscribe(result => {
      this.isUserConnected = result;
    })
   }

  isUserLoggedIn(): boolean {
    
    return this.isUserConnected;
  }
}
