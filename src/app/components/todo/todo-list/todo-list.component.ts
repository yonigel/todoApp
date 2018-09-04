import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Todo } from '../../../models/todo';
import { Observable } from 'rxjs';
import { Category } from '../../../models/category';
import { TodoService } from '../../../services/todoService/todo.service';
import { CategoryService } from '../../../services/categoryService/category.service';

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

  constructor(private categoryService: CategoryService, private todoService: TodoService) { }

  ngOnInit() {
    this.getCategoryParams();
    this.todos = this.todoService.getTodosByCategory(this.categoryId);
  }

  private getCategoryParams() {
    this.categoryService.getCategoryById(this.categoryId).subscribe(category => {
      let permittedUsers: string[] = category.permittedUsers.split(",");
      console.log(category._id)
      this.category = new Category(category._id, category.name, category.description, permittedUsers, category.createdBy);
    })
  }
  
  private changeSelectedCategory() {
    this.selectedCategory.emit(this.category);
  }


}
