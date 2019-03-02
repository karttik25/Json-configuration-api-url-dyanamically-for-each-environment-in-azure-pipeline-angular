import { TestBed } from '@angular/core/testing';

import { DataContextServiceService } from './data-context-service.service';

describe('DataContextServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataContextServiceService = TestBed.get(DataContextServiceService);
    expect(service).toBeTruthy();
  });
});
