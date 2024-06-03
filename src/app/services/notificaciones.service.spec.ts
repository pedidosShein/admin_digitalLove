import { TestBed } from '@angular/core/testing';

import { NotificacionesService } from './notificaciones.service';

describe('NotificacionesService', () => {
  let service: NotificacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NotificacionesService);
  });

});
