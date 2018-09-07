import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from '../../../services/categoryService/category.service';
import { TodoService } from '../../../services/todoService/todo.service';
import { FormBuilder, Validators } from '@angular/forms';
import { UserService } from '../../../services/userService/user.service';
import { Todo } from '../../../models/todo';
import { ActivatedRoute, Router } from '@angular/router';
import { TodoEventsService } from '../../../services/events/todo-events.service';

@Component({
  selector: 'app-add-todo-modal',
  templateUrl: './add-todo-modal.component.html',
  styleUrls: ['./add-todo-modal.component.css']
})
export class AddTodoModalComponent implements OnInit {

  @Input()
  categoryId: string;
  
  @Input()
  categoryName: string;

  private createdBy: string;
  private addTodoFormGroup;
  private todoAdded: boolean;

  constructor(private todoEventsService: TodoEventsService, private router: Router, private todoService: TodoService, private formBuilder: FormBuilder, private userService: UserService) { }

  ngOnInit() {
    this.todoAdded = false;
    this.addTodoFormGroup = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['']
    });
    this.createdBy = this.userService.getConnectedUsername();
  }

  private onAddTodoSubmit() {
    let newTodo = new Todo('', this.addTodoFormGroup.controls.title.value, this.addTodoFormGroup.controls.title.value, false, this.categoryId, this.createdBy);
    this.todoService.createTodo(newTodo).subscribe(response=>{
      this.todoEventsService.todoListChangedEvent();

      let createdTodo = new Todo(response._id, response.title, response.description, response.isDone, response.categoryId, response.createdBy);
      this.todoEventsService.todoAddedEvent(createdTodo);

      this.todoAdded = true;
    });
  }

  private closeModal() {
    this.ngOnInit();
  }

}
