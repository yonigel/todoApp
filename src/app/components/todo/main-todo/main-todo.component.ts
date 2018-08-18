import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../services/httpService/http.service';
import { Todo } from '../../../models/todo';
import { TodoService } from '../../../services/todoService/todo.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main-todo',
  templateUrl: './main-todo.component.html',
  styleUrls: ['./main-todo.component.css']
})
export class MainTodoComponent implements OnInit {

  private todoList: Observable<any>

  constructor(private todoService: TodoService) { }

  ngOnInit() {
    this.todoList = this.todoService.getTodos()
  }

}
