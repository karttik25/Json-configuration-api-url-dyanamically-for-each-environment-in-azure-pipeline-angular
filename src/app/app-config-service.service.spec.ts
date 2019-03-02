import { TestBed } from '@angular/core/testing';

import { AppConfigServiceService } from './app-config-service.service';

describe('AppConfigServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppConfigServiceService = TestBed.get(AppConfigServiceService);
    expect(service).toBeTruthy();
  });
});
