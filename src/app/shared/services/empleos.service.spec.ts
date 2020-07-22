import { TestBed } from '@angular/core/testing';

import { EmpleosService } from './empleos.service';

describe('EmpleosService', () => {
  let service: EmpleosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EmpleosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
