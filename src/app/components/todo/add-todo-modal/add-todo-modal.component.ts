import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from '../../../services/categoryService/category.service';
import { TodoService } from '../../../services/todoService/todo.service';

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


  constructor(private todoService: TodoService) { }

  ngOnInit() {
    
  }

}
