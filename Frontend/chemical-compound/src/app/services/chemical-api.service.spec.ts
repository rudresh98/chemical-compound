import { TestBed } from '@angular/core/testing';

import { ChemicalApiService } from './chemical-api.service';

describe('ChemicalApiService', () => {
  let service: ChemicalApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChemicalApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
