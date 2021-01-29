import { TestBed } from '@angular/core/testing';

import { OutletGuard } from './outlet.guard';

describe('OutletGuard', () => {
  let guard: OutletGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(OutletGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
