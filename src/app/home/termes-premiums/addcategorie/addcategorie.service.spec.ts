import { TestBed } from '@angular/core/testing';

import { AddcategorieService } from './addcategorie.service';

describe('AddcategorieService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddcategorieService = TestBed.get(AddcategorieService);
    expect(service).toBeTruthy();
  });
});
