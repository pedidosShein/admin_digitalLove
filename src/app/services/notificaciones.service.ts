import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

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
    return this.http.get(this.apiUrl, { headers });
  }

  
}
