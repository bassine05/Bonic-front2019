import { TestBed } from '@angular/core/testing';

import { AddcompteService } from './addcompte.service';

describe('AddcompteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddcompteService = TestBed.get(AddcompteService);
    expect(service).toBeTruthy();
  });
});
