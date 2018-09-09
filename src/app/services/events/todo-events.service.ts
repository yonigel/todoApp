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
  private selectedTodoEditedSource: Subject<Todo> = new Subject<Todo>();
  private selectedTodoDeletedSource: Subject<string> = new Subject<string>();

  todoChangedOccures = this.todoChangedSource.asObservable();
  todoAdedOccures = this.todoAddedSource.asObservable();
  selectedTodoEditedOccures = this.selectedTodoEditedSource.asObservable();
  selectedTodoDeletedOccures = this.selectedTodoDeletedSource.asObservable();

  selectedTodoDeletedEvent(todoId: string) {
    this.selectedTodoDeletedSource.next(todoId);
  }

  selectedTodoEditChangedEvent(todo: Todo) {
    this.selectedTodoEditedSource.next(todo);
  }

  todoListChangedEvent() {
    this.todoChangedSource.next();
  }

  todoAddedEvent(todo: Todo) {
    this.todoAddedSource.next(todo);
  }
  
}
