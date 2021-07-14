import { TestBed } from '@angular/core/testing';

import { PresentesService } from './presentes.service';

describe('PresentesService', () => {
  let service: PresentesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PresentesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
