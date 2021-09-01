import { TestBed } from '@angular/core/testing';

import { PrimengThemeService } from './primeng-theme.service';

describe('PrimengThemeService', () => {
  let service: PrimengThemeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrimengThemeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
