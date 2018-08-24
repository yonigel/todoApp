import { Injectable } from '@angular/core';
import { TodoServiceInterface } from './todo-service-interface';
import { Todo } from '../../models/todo';
import { HttpService } from '../httpService/http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService implements TodoServiceInterface {
  
  private readonly BASE_TODO_LIST_URL = 'assets/todoListData.json'

  constructor(private httpService: HttpService) { }

  getTodos(): Observable<any> {
    return this.httpService.get(this.BASE_TODO_LIST_URL)
  }
  getSingleTodo(todoID: number): Observable<any> {
    throw new Error("Method not implemented.");
  }
  deleteTodo(todoID: number) {
    throw new Error("Method not implemented.");
  }
  addTodo() {
    throw new Error("Method not implemented.");
  }
}
