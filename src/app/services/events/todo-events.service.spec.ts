import { TestBed, inject } from '@angular/core/testing';

import { TodoEventsService } from './todo-events.service';

describe('TodoEventsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TodoEventsService]
    });
  });

  it('should be created', inject([TodoEventsService], (service: TodoEventsService) => {
    expect(service).toBeTruthy();
  }));
});
