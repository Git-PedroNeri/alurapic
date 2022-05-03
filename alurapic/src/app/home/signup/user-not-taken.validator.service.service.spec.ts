import { TestBed, inject } from '@angular/core/testing';

import { UserNotTaken.Validator.ServiceService } from './user-not-taken.validator.service.service';

describe('UserNotTaken.Validator.ServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UserNotTaken.Validator.ServiceService]
    });
  });

  it('should be created', inject([UserNotTaken.Validator.ServiceService], (service: UserNotTaken.Validator.ServiceService) => {
    expect(service).toBeTruthy();
  }));
});
