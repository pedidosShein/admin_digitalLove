import { Component, OnInit } from '@angular/core';
import { NotificacionesService } from '../services/notificaciones.service';
import { reporte } from '../models/notificaciones.model';
import { BloqueoService } from '../services/bloqueo.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmacionBloqueoComponent } from '../confirmacion-bloqueo/confirmacion-bloqueo.component';

@Component({
  selector: 'app-notificacioes',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.css']
})

export class NotificacioesComponent implements OnInit {

  reportes: reporte[] = [];
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

  
}