import { TestBed } from '@angular/core/testing';

import { EditorialApiService } from './editorial-api.service';

describe('EditorialApiService', () => {
  let service: EditorialApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditorialApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
