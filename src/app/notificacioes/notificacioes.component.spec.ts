import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificacioesComponent } from './notificacioes.component';

describe('NotificacioesComponent', () => {
  let component: NotificacioesComponent;
  let fixture: ComponentFixture<NotificacioesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NotificacioesComponent]
    });
    fixture = TestBed.createComponent(NotificacioesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
