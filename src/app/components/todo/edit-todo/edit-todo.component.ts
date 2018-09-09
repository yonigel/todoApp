import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Todo } from '../../../models/todo';
import { TodoEventsService } from '../../../services/events/todo-events.service';
import { TodoService } from '../../../services/todoService/todo.service';

@Component({
  selector: 'app-edit-todo',
  templateUrl: './edit-todo.component.html',
  styleUrls: ['./edit-todo.component.css']
})
export class EditTodoComponent implements OnInit {

  @Input()
  selectedTodo: Todo
  
  private todoEditted: boolean;
  private editTodoFormGroup;

  constructor(private todoService: TodoService ,private formBuilder: FormBuilder, private todoEventService: TodoEventsService) { }

  ngOnInit() {
    this.todoEditted = false;
    this.editTodoFormGroup = this.formBuilder.group({
      title: [this.selectedTodo.title, Validators.required],
      description: [this.selectedTodo.description, Validators.required]
    });

    this.todoEventService.selectedTodoEditedOccures.subscribe(todo => {
      this.editTodoFormGroup.controls.title.setValue(todo.title);
      this.editTodoFormGroup.controls.description.setValue(todo.description);
    })

  }

  private closeModal() {
    this.todoEditted = false;
  }

  private oneditTodoSubmit() {
    this.todoService.updateTodo(this.selectedTodo.id, {title: this.editTodoFormGroup.controls.title.value, description: this.editTodoFormGroup.controls.description.value}).subscribe(response => {
      console.log(JSON.stringify(response));
      
      this.todoEventService.selectedTodoEditChangedEvent(new Todo(response._id, response.title,response.description,response.isDone,response.categoryId,response.createdBy));
    })
    this.todoEditted = true;
  }
}
