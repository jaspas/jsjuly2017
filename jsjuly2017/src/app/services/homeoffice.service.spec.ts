import { TestBed, inject } from '@angular/core/testing';

import { HomeofficeService } from './homeoffice.service';

describe('HomeofficeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HomeofficeService]
    });
  });

  it('should be created', inject([HomeofficeService], (service: HomeofficeService) => {
    expect(service).toBeTruthy();
  }));
});
