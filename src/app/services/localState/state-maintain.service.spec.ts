import { TestBed } from '@angular/core/testing';

import { StateMaintainService } from './state-maintain.service';

describe('StateMaintainService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StateMaintainService = TestBed.get(StateMaintainService);
    expect(service).toBeTruthy();
  });
});
