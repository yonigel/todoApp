import { Injectable } from '@angular/core';
import { CategoryServiceInterface } from './category-service-interface';
import { User } from '../../models/user';
import { Category } from '../../models/category';
import { HttpService } from '../httpService/http.service';
import { Observable } from 'rxjs';
import { UserService } from '../userService/user.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService implements CategoryServiceInterface {

  private readonly CATEGORY_API_PATH: string = '/categories';

  constructor(private userService: UserService, private httpService: HttpService) { }

  getCategoriesByUser(): Observable<any> {
    let user = this.userService.getConnectedUsername();
    return this.httpService.post(`${this.CATEGORY_API_PATH}/getAllCategoriesByUser`, {user: user});
  }
  
  getCategoryById(id: string): Observable<any> {
    return this.httpService.get(`${this.CATEGORY_API_PATH}/${id}`);
  }

  addCategory(category: Category): Observable<any> {
    return this.httpService.post(this.CATEGORY_API_PATH, {category});
  }
  addPermittedUser(user: string, category: Category): Observable<any> {
    return this.httpService.put(`${this.CATEGORY_API_PATH}/addPermittedUser/${category.id}`, {username: user});
  }
  removePermittedUser(username: string, category: Category): Observable<any> {
    return this.httpService.put(`${this.CATEGORY_API_PATH}/removePermittedUser/${category.id}`, {username: username});
  }


}
