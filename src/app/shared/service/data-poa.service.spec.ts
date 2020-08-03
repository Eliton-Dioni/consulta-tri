import { TestBed } from '@angular/core/testing';

import { DataPoaService } from './data-poa.service';

describe('DataPoaService', () => {
  let service: DataPoaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataPoaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
