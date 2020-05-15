import { TestBed } from '@angular/core/testing';

import { ClubSportsService } from './club-sports.service';

describe('ClubSportsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClubSportsService = TestBed.get(ClubSportsService);
    expect(service).toBeTruthy();
  });
});
