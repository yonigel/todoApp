import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../../services/httpService/http.service';
import { Todo } from '../../../models/todo';
import { TodoService } from '../../../services/todoService/todo.service';
import { Observable } from 'rxjs';
import { CategoryService } from '../../../services/categoryService/category.service';
import { Category } from '../../../models/category';

@Component({
  selector: 'app-main-todo',
  templateUrl: './main-todo.component.html',
  styleUrls: ['./main-todo.component.css']
})
export class MainTodoComponent implements OnInit {

  private categoryList: Observable<any>;
  private selectedCategory: Category;
  
  constructor(private todoService: TodoService, private categoryService: CategoryService) { }

  ngOnInit() {
    this.selectedCategory = new Category('', '', '', [], '');
    this.categoryList = this.categoryService.getCategoriesByUser();
  }

  private onCategorySelect(category: Category) {
    this.selectedCategory = category;
    console.log(category.id);
  }

}
