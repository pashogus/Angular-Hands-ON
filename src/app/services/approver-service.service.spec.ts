import { TestBed } from '@angular/core/testing';

import { ApproverServiceService } from './approver-service.service';

describe('ApproverServiceService', () => {
  let service: ApproverServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApproverServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
