import { TestBed } from '@angular/core/testing';

import { AtendeeService } from './atendee.service';

describe('AtendeeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AtendeeService = TestBed.get(AtendeeService);
    expect(service).toBeTruthy();
  });
});
