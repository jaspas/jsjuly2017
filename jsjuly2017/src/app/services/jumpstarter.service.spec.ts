import { TestBed, inject } from '@angular/core/testing';

import { JumpstarterService } from './jumpstarter.service';

describe('JumpstarterService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JumpstarterService]
    });
  });

  it('should be created', inject([JumpstarterService], (service: JumpstarterService) => {
    expect(service).toBeTruthy();
  }));
});
