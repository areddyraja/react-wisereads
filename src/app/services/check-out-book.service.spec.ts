import { TestBed } from '@angular/core/testing';

import { CheckOutBookService } from './check-out-book.service';

describe('CheckOutBookService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CheckOutBookService = TestBed.get(CheckOutBookService);
    expect(service).toBeTruthy();
  });
});
