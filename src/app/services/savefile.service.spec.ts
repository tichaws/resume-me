import { TestBed } from '@angular/core/testing';

import { SavefileService } from './savefile.service';

describe('SavefileService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SavefileService = TestBed.get(SavefileService);
    expect(service).toBeTruthy();
  });
});
