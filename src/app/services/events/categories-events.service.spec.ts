import { TestBed, inject } from '@angular/core/testing';

import { CategoriesEventsService } from './categories-events.service';

describe('CategoriesEventsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CategoriesEventsService]
    });
  });

  it('should be created', inject([CategoriesEventsService], (service: CategoriesEventsService) => {
    expect(service).toBeTruthy();
  }));
});
