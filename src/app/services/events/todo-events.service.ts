import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Todo } from '../../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoEventsService {

  constructor() { }

  private todoChangedSource: Subject<boolean> = new Subject<boolean>();
  private todoAddedSource: Subject<Todo> = new Subject<Todo>();

  todoChangedOccures = this.todoChangedSource.asObservable();
  todoAdedOccures = this.todoAddedSource.asObservable();

  todoListChangedEvent() {
    this.todoChangedSource.next();
  }

  todoAddedEvent(todo: Todo) {
    this.todoAddedSource.next(todo);
  }
  
}
