import { Injectable } from '@angular/core';
import { UserConnectionEventService } from '../events/user-connection-event.service';
import { UserServiceInterface } from './user-service-interface';
import { User } from '../../models/user';
import { Observable } from 'rxjs';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService implements UserServiceInterface{

  private readonly USER_API_PATH: string = '/users';
  private isUserConnected: boolean;

  constructor(private userConnectivityEventService: UserConnectionEventService, private httpService: HttpService) {
    this.isUserConnected = localStorage.getItem('currentUser') ? true : false; 
    this.userConnectivityEventService.userConnectionChanged.subscribe(result => {
      this.isUserConnected = result;
    })
   }

  isUserLoggedIn(): boolean {
    
    return this.isUserConnected;
  }

  register(user: User): Observable<any> {
    return this.httpService.post(this.USER_API_PATH, {username: user.username, password: user.password});
  }
  
}
