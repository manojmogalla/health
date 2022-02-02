import { TestBed } from '@angular/core/testing';

import { LabAssitantService } from './lab-assitant.service';

describe('LabAssitantService', () => {
  let service: LabAssitantService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LabAssitantService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
