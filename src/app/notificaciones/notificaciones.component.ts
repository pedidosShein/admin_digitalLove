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

  formatDate(date: Date): string {
    const day = String(date.getDate()).padStart(2, '0');
    const month = String(date.getMonth() + 1).padStart(2, '0'); // Los meses comienzan desde 0
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, '0');
    const minutes = String(date.getMinutes()).padStart(2, '0');
    
    return `${day}-${month}-${year} ${hours}:${minutes}`;
}

  

  getDate(){
    const fecha = new Date('2024-05-21T03:17:20.036090Z');
    const formattedDate = this.formatDate(fecha);
    console.log(formattedDate);
  }
}