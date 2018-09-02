import { Injectable } from '@angular/core';
import { TodoServiceInterface } from './todo-service-interface';
import { Todo } from '../../models/todo';
import { HttpService } from '../httpService/http.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService implements TodoServiceInterface {

  private readonly TODO_API_PATH: string = '/todoList';

  constructor(private httpService: HttpService) { }

  getTodosByCategory(categoryId: string): Observable<any> {
    return this.httpService.post(`${this.TODO_API_PATH}/getTodosByCategory`, {categoryId: categoryId});
  }
  getSingleTodo(todoID: string): Observable<any> {
    return this.httpService.get(`${this.TODO_API_PATH}/${todoID}`);
  }
  deleteTodoById(todoID: string): Observable<any> {
    return this.httpService.delete(`${this.TODO_API_PATH}/deleteTodoById/${todoID}`);
  }

  deleteTodoByCategory(categoryId: string): Observable<any> {
    return this.httpService.delete(`${this.TODO_API_PATH}/deleteTodosByCategory/${categoryId}`);
  }
  createTodo(todo: Todo): Observable<any> {
    return this.httpService.post(this.TODO_API_PATH, {title: todo.title, description: todo.description, createdBy: todo.creator, categoryId: todo.category});
  }
  updateTodo(todoId: string, newTodo: Todo): Observable<any> {
    return this.httpService.put(`${this.TODO_API_PATH}/${todoId}`, {title: newTodo.title, description: newTodo.description, isDone: newTodo.state});
  }

}
