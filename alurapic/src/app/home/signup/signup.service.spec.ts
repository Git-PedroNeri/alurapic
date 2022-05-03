import { TestBed, inject } from '@angular/core/testing';

import { SignUpService } from './signup.service';

describe('SignUpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SignUpService],
    });
  });

  it('should be created', inject([SignUpService], (service: SignUpService) => {
    expect(service).toBeTruthy();
  }));
});
