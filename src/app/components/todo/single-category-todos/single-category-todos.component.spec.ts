import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleCategoryTodosComponent } from './single-category-todos.component';

describe('SingleCategoryTodosComponent', () => {
  let component: SingleCategoryTodosComponent;
  let fixture: ComponentFixture<SingleCategoryTodosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SingleCategoryTodosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SingleCategoryTodosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
