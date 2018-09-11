import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesEventsService {

  constructor() { }

  private setCategoryListChangedSource: Subject<boolean> = new Subject<boolean>();
  private selectDisplayCategorySource: Subject<string> = new Subject<string>();

  categoryListChanged = this.setCategoryListChangedSource.asObservable();
  displayCategiryChanged = this.selectDisplayCategorySource.asObservable();

  setDisplayCategory(categoryId: string) {
    this.selectDisplayCategorySource.next(categoryId);
  }

  setCategoryListChanghed() {
    this.setCategoryListChangedSource.next();
  }
  
}
