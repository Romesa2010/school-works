import { TestBed } from '@angular/core/testing';

import { LoadApplicationGuard } from './load-application.guard';

describe('LoadApplicationGuard', () => {
  let guard: LoadApplicationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(LoadApplicationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
