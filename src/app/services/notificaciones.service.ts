import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { reporte } from '../models/notificaciones.model';

@Injectable({
  providedIn: 'root'
})
export class NotificacionesService {
  private apiUrl = 'https://better-ursola-jazael-26647204.koyeb.app/api/v1/recuperarReportes';
  private token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE5NjcxMTk5LCJpYXQiOjE3MTcwNzkxOTksImp0aSI6IjYyNGNiZTk3OWJhMzQzZjdhMjFhYjlhNDc2YWEzYmE2IiwidXNlcl9pZCI6MX0._-bTUqrRYFXN6_Poiohuf9Bh6Ai1IEYazupoL-eheFs';
  
  constructor(private http: HttpClient) { }

  getReportes(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
    /* return this.http.get(this.apiUrl, { headers }); */
    return this.http.get<reporte[]>(this.apiUrl, {headers}).pipe(
      map(reportes => reportes.map(reporte => ({
        ...reporte,
        fechaRegistro: this.formatearFecha(reporte.fechaRegistro)
      })))
    );
  }

  formatearFecha(fechaReporte: Date | string): string {
    const fecha = new Date(fechaReporte);

    const year = fecha.getUTCFullYear();
    const month = String(fecha.getUTCMonth() + 1).padStart(2, '0');
    const day = String(fecha.getUTCDate()).padStart(2, '0');
    const hours = String(fecha.getUTCHours()).padStart(2, '0');
    const minutes = String(fecha.getUTCMinutes()).padStart(2, '0');

    return `${year}-${month}-${day} ${hours}:${minutes}`;
  }
  
}
