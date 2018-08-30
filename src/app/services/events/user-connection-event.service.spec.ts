import { TestBed, inject } from '@angular/core/testing';

import { UserConnectionEventService } from './user-connection-event.service';

describe('UserConnectionEventService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserConnectionEventService]
    });
  });

  it('should be created', inject([UserConnectionEventService], (service: UserConnectionEventService) => {
    expect(service).toBeTruthy();
  }));
});
