import { TestBed } from '@angular/core/testing';

import { HttpGetAllDataService } from './http-get-all-data.service';

describe('HttpGetAllDataService', () => {
  let service: HttpGetAllDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HttpGetAllDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
