import { TestBed } from '@angular/core/testing';

import { AddextensionService } from './addextension.service';

describe('AddextensionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddextensionService = TestBed.get(AddextensionService);
    expect(service).toBeTruthy();
  });
});
