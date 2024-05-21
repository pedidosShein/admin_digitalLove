import { Component, OnInit } from '@angular/core';
import { NotificacionesService } from '../services/notificaciones.service';
import { reporte } from '../models/notificaciones.model';

@Component({
  selector: 'app-notificacioes',
  templateUrl: './notificaciones.component.html',
  styleUrls: ['./notificaciones.component.css']
})

export class NotificacioesComponent implements OnInit {

  reportes: reporte[] = [];
  constructor(private notificacionesService: NotificacionesService) { }
  
  ngOnInit() {
    this.notificacionesService.getReportes().subscribe(
      (reportes) => {
      this.reportes = reportes;
      },
      (error) => {
        console.log('Error al obtener los usuarios:', error);
      });
    
  }
}