import { TestBed } from '@angular/core/testing';

import { EmplyeeserviceService} from './employeeservice.service';

describe('EmployeeserviceService', () => {
  let service: EmplyeeserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmplyeeserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
