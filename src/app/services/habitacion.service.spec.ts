import { TestBed } from '@angular/core/testing';

import { HabitacionesService } from './habitacion.service';

describe('HabitacionesService', () => {
  let service: HabitacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HabitacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
