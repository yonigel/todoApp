import { Injectable } from '@angular/core';
import { AuthenticationServiceInterface } from './authentication-service-interface';
import { config } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService implements AuthenticationServiceInterface {

  private readonly AUTHENTICATION_URL = '/users/authentication';

  constructor(private httpService: HttpService) { }

  login(username: string, password: string) {
    return this.httpService.post(this.AUTHENTICATION_URL, {username: username, password: password})
    .pipe(map(user => {
      if (user && user.token) {
        localStorage.setItem('currentUser', JSON.stringify(user));
      }
      return user;
    }));
  }

  logout() {
    localStorage.removeItem('currentUser');
  }

}
