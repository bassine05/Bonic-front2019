import { TestBed } from '@angular/core/testing';

import { AddpremiumService } from './addpremium.service';

describe('AddpremiumService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddpremiumService = TestBed.get(AddpremiumService);
    expect(service).toBeTruthy();
  });
});
