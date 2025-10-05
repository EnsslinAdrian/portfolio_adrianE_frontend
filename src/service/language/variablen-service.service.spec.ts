import { TestBed } from '@angular/core/testing';

import { VariablenServiceService } from './variablen-service.service';

describe('VariablenServiceService', () => {
  let service: VariablenServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VariablenServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
