import { TestBed } from '@angular/core/testing';

import { AddtagService } from './addtag.service';

describe('AddtagService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddtagService = TestBed.get(AddtagService);
    expect(service).toBeTruthy();
  });
});
