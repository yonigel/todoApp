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

  @Output()
  selectedTodo = new EventEmitter<Todo>();


  private category: Category;
  private todoList: Todo[];

  constructor(private todoEventsService: TodoEventsService ,private categoryService: CategoryService, private todoService: TodoService) { }

  ngOnInit() {
    this.todoList = [];
    this.getCategoryParams();
    this.getTodos();
    this.todoEventsService.todoAdedOccures.subscribe(newTodo => {
      if(this.categoryId == newTodo.categoryId)
        this.todoList.push(newTodo);
    });
    this.todoEventsService.selectedTodoDeletedOccures.subscribe((todoId) => {
      this.todoList = this.todoList.filter(todo => todo.id != todoId);
    });
    this.todoEventsService.selectedTodoEditedOccures.subscribe(editedTodo => {
      console.log(`fot event for ${editedTodo}`)
      this.todoList = this.todoList.map((todo) => {
        return todo.id == editedTodo.id ? editedTodo : todo;
      })
    })
  }

  private getTodos(): void {
    this.todoList = [];
    this.todoService.getTodosByCategory(this.categoryId).subscribe(todos=>{
      for (let todo of todos) {
        this.todoList.push(new Todo(todo._id, todo.title, todo.description, todo.isDone, todo.categoryId, todo.createdBy));
      }
    });
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

  private changeSelectedTodo(todo: Todo): void {
    this.selectedTodo.emit(todo);
  }

  private setTodoState(id: string, isDone: boolean): void {
    this.todoService.updateTodo(id, {isDone: !isDone}).subscribe(response=>{
      this.todoList = this.todoList.map(todo => {
        todo.isDone = todo.id == id ? !isDone : todo.isDone;
        return todo;
      }); 
      this.todoEventsService.todoListChangedEvent();
    });
  }
   
  // private deleteTodo(id: string): void {
  //   this.todoService.deleteTodoById(id).subscribe(response=>{
  //     this.todoList = this.todoList.filter(todo => todo.id != id);
  //     this.todoEventsService.todoListChangedEvent();
  //   })
  // }


}
