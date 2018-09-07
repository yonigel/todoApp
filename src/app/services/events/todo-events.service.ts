import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoEventsService {

  constructor() { }

  private todoChangedSource: Subject<boolean> = new Subject<boolean>();
  todoChangedOccures = this.todoChangedSource.asObservable();

  todoListChangedEvent() {
    this.todoChangedSource.next();
  }
  
}
