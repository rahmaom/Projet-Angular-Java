import { TestBed } from '@angular/core/testing';

import { AthlèteService } from './athlète.service';

describe('AthlèteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AthlèteService = TestBed.get(AthlèteService);
    expect(service).toBeTruthy();
  });
});
