import { TestBed } from '@angular/core/testing';

import { BookLocalService } from './book.service';

describe('BookLocalService', () => {
  let service: BookLocalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BookLocalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
