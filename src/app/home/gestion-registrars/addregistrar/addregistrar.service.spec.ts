import { TestBed } from '@angular/core/testing';

import { AddregistrarService } from './addregistrar.service';

describe('AddregistrarService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddregistrarService = TestBed.get(AddregistrarService);
    expect(service).toBeTruthy();
  });
});
