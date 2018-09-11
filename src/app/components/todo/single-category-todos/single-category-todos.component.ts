import { Component, OnInit, Input } from '@angular/core';
import { CategoriesEventsService } from '../../../services/events/categories-events.service';
import { TodoService } from '../../../services/todoService/todo.service';
import { Todo } from '../../../models/todo';
import { CategoryService } from '../../../services/categoryService/category.service';
import { Category } from '../../../models/category';

@Component({
  selector: 'app-single-category-todos',
  templateUrl: './single-category-todos.component.html',
  styleUrls: ['./single-category-todos.component.css']
})
export class SingleCategoryTodosComponent implements OnInit {

  @Input()
  displayCategoryId;

  private todoList: Todo[];
  private selectedCategory: Category;

  constructor(private categoryService: CategoryService ,private categoryEventService: CategoriesEventsService, private todoService: TodoService) { }

  ngOnInit() {
    this.todoList = [];
    this.categoryEventService.displayCategiryChanged.subscribe(categoryId => {
      console.log(`selected category id is  ${categoryId}`)
      this.displayTodosBySelectedCategory(categoryId);
      this.categoryService.getCategoryById(categoryId).subscribe(category => {
        this.selectedCategory = new Category(category._id, category.name, category.description, [], category.createdBy);
      })
    })
  }

  private displayTodosBySelectedCategory(categoryId: string) {
    console.log(`diaplaying for category ${categoryId}`)
    this.todoList = [];
    this.todoService.getTodosByCategory(categoryId).subscribe(todos => {
      console.log(JSON.stringify(todos))
      for (let todo of todos) {
        this.todoList.push(new Todo(todo._id, todo.title, todo.description, todo.isDone, todo.categoryId, todo.createdBy));
      }
      console.log(`got ${this.todoList.length} todos`);
      
    })
  }

}
