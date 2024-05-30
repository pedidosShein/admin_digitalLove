import { Component, OnInit, OnDestroy } from '@angular/core';
import { NotificacionesService } from '../services/notificaciones.service';
import { reporte } from '../models/notificaciones.model';
import { BloqueoService } from '../services/bloqueo.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmacionBloqueoComponent } from '../confirmacion-bloqueo/confirmacion-bloqueo.component';
import { WebsocketService } from '../services/websocket.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-notificacioes',
  template: `<div *ngFor="let notification of notifications">
  {{ notification | json }}
</div>`,
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.css']
})

export class NotificacioesComponent implements OnInit, OnDestroy {
  notificaciones: any[] = [];
  reportes: reporte[] = [];
  private websocketSubscription!: Subscription;

  constructor(
    private websocketService: WebsocketService,
    private notificacionesService: NotificacionesService,
    private bloqueoService: BloqueoService,
  ) { }

  ngOnInit(): void {
    this.notificacionesService.getReportes().subscribe(
      (reportes) => {
      this.reportes = reportes;
      },
      (error) => {
        console.log('Error al obtener los usuarios:', error);
      });
      
      this.websocketService.connect();
      this.websocketSubscription = this.websocketService.messages.subscribe(
        message => {
          console.log('Notification received: ', message);
          this.reportes.push(message);
        }
      );
  }

  ngOnDestroy() {
    if (this.websocketSubscription) {
      this.websocketSubscription.unsubscribe();
    }
    this.websocketService.disconnect();
  }
}

  /* reportes: reporte[] = [];
  constructor(
    private notificacionesService: NotificacionesService,
    private bloqueoService: BloqueoService,
    public ventana: MatDialog
  ) { }
  
  ngOnInit() {
    this.notificacionesService.getReportes().subscribe(
      (reportes) => {
      this.reportes = reportes;
      },
      (error) => {
        console.log('Error al obtener los usuarios:', error);
      });
  }

  setBloqueo(): void {
    const ventanaEmergente = this.ventana.open(ConfirmacionBloqueoComponent, 
      {width: '10rem',
        data: {}
      });

      ventanaEmergente.afterClosed().subscribe(result => {
        if (result) {
          alert('Usuario ' + result + ' ha sido bloqueado.');
        }
      });
  } 
}*/

  
