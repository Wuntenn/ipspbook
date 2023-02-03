import { TestBed } from '@angular/core/testing';

import { SbliveService } from './sblive.service';

describe('SbliveService', () => {
  let service: SbliveService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SbliveService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
