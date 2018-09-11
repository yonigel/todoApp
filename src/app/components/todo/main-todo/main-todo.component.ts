import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../services/httpService/http.service';
import { Todo } from '../../../models/todo';
import { TodoService } from '../../../services/todoService/todo.service';
import { Observable } from 'rxjs';
import { CategoryService } from '../../../services/categoryService/category.service';
import { Category } from '../../../models/category';
import { TodoEventsService } from '../../../services/events/todo-events.service';
import { UserService } from '../../../services/userService/user.service';
import { CategoriesEventsService } from '../../../services/events/categories-events.service';

@Component({
  selector: 'app-main-todo',
  templateUrl: './main-todo.component.html',
  styleUrls: ['./main-todo.component.css']
})
export class MainTodoComponent implements OnInit {

  private categoryList: Observable<any>;
  private selectedCategory: Category;
  private selectedTodo: Todo;
  private computerBackgroundUrl = '../../../../assets/images/computerBackground.jpg';
  private username: string;
  private allCategoriesSelected: boolean;
  private displayCategoryId: string;
  
  constructor(private categoryEventService: CategoriesEventsService ,private userService: UserService ,private todoEventService: TodoEventsService ,private todoService: TodoService, private categoryService: CategoryService) { }

  ngOnInit() {
    this.selectedCategory = new Category('', '', '', [], '');
    this.categoryList = this.categoryService.getCategoriesByUser();
    this.username = this.userService.getConnectedUsername();
    this.allCategoriesSelected = true;
  }

  private selectAllCategories(): void {
    this.allCategoriesSelected = true;
  }

  private displayCategory(categoryId: string): void {
    this.allCategoriesSelected = false;
    this.displayCategoryId = categoryId;
    this.categoryEventService.setDisplayCategory(categoryId);
    console.log(`displaying category ${categoryId}`);
  }

  private onCategorySelect(category: Category): void {
    this.selectedCategory = category;
    console.log(category.id);
  }

  private onTodoSelected(todo: Todo): void {
    this.selectedTodo = todo;
    this.todoEventService.selectedTodoEditChangedEvent(todo);
    console.log(`onTodoSelected ${JSON.stringify(todo)}`);
  }

}
