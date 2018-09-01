import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesEventsService {

  constructor() { }

  private setCategoryListChangedSource: Subject<boolean> = new Subject<boolean>();
  categoryListChanged = this.setCategoryListChangedSource.asObservable();

  setCategoryListChanghed() {
    this.setCategoryListChangedSource.next();
  }
  
}
