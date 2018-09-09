import { Component, OnInit, Input } from '@angular/core';
import { TodoService } from '../../../services/todoService/todo.service';
import { Todo } from '../../../models/todo';
import { TodoEventsService } from '../../../services/events/todo-events.service';

@Component({
  selector: 'app-delete-todo',
  templateUrl: './delete-todo.component.html',
  styleUrls: ['./delete-todo.component.css']
})
export class DeleteTodoComponent implements OnInit {

  @Input()
  todoId: string

  @Input()
  todoTitle: string

  private todoDeleted: boolean;

  constructor(private todoService: TodoService, private todoEventService: TodoEventsService) { }

  ngOnInit() {
    this.todoDeleted = false;
  }

  private deleteTodo() {
    this.todoService.deleteTodoById(this.todoId).subscribe(response => {
      console.log(`response for deleting is ${JSON.stringify(response)}`);
      this.todoEventService.selectedTodoDeletedEvent(this.todoId);
    })
  }

}
