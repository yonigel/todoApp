import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../../models/todo';
import { Observable } from 'rxjs';
import { Category } from '../../../models/category';
import { TodoService } from '../../../services/todoService/todo.service';
import { CategoryService } from '../../../services/categoryService/category.service';
import { TodoEventsService } from '../../../services/events/todo-events.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  @Input()
  categoryId: string;

  @Output()
  selectedCategory = new EventEmitter<Category>();


  private category: Category;
  private todos;

  constructor(private todoEventsService: TodoEventsService ,private categoryService: CategoryService, private todoService: TodoService) { }

  ngOnInit() {
    this.getCategoryParams();
    this.getTodos();
    this.todoEventsService.todoChangedOccures.subscribe(()=>{
      this.getTodos();
      console.log(`todo list changed`)
    })
  }

  private getTodos(): void {
    this.todos = this.todoService.getTodosByCategory(this.categoryId);
  }

  private getCategoryParams(): void {
    this.categoryService.getCategoryById(this.categoryId).subscribe(category => {
      let permittedUsers: string[] = category.permittedUsers.split(",");
      this.category = new Category(category._id, category.name, category.description, permittedUsers, category.createdBy);
    })
  }
  
  private changeSelectedCategory(): void {
    this.selectedCategory.emit(this.category);
  }

  private setTodoState(id: string, isDone: boolean): void {

    console.log(`setting todo ${id} to ${isDone}`)
    this.todoService.updateTodo(id, {isDone: !isDone}).subscribe(response=>{
      console.log(`todo updates ${JSON.stringify(response)}`);
      this.todoEventsService.todoListChangedEvent();
    });
  }
   
  private deleteTodo(id: string): void {
    this.todoService.deleteTodoById(id).subscribe(response=>{
      console.log(`deleting todo response is ${response}`);
      this.todoEventsService.todoListChangedEvent();
    })
  }


}
