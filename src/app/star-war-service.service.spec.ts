import { TestBed } from '@angular/core/testing';

import { StarWarServiceService } from './star-war-service.service';

describe('StarWarServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StarWarServiceService = TestBed.get(StarWarServiceService);
    expect(service).toBeTruthy();
  });
});
