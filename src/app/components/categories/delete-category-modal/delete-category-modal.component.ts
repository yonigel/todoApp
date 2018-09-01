import { Component, OnInit, Input } from '@angular/core';
import { CategoryService } from '../../../services/categoryService/category.service';
import { Category } from '../../../models/category';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoriesEventsService } from '../../../services/events/categories-events.service';

@Component({
  selector: 'app-delete-category-modal',
  templateUrl: './delete-category-modal.component.html',
  styleUrls: ['./delete-category-modal.component.css']
})
export class DeleteCategoryModalComponent implements OnInit {

  @Input()
  selectedCategoryId;

  private selectedCategory: Category;
  private categoryDeleted: boolean;

  constructor(private categoryService: CategoryService, private router: Router, private categoriesEventsService: CategoriesEventsService) { }

  ngOnInit() {
    this.categoryDeleted = false;
    this.categoryService.getCategoryById(this.selectedCategoryId).subscribe(response => {
      this.selectedCategory = new Category(response._id, response.name, response.description, [], response.createdBy);
    })
  }

  private delteCategory() {
    this.categoryService.deleteCategory(this.selectedCategory).subscribe(response=>{
      if(response.status=='succeeded') {
        this.categoryDeleted = true;
        this.categoriesEventsService.setCategoryListChanghed();
        this.router.navigate(['/']);
      }
    })
  }

}
