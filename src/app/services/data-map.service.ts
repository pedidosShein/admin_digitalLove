import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface ApiData {
  ubicaciones: { [estado: string]: number };
  total_usuarios: number;
  estado_con_mas_usuarios: string;
  usuarios_activos: number;
  total_reportes: number;
  estado_con_mas_reportes?: string;
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  /* private apiUrl = 'https://better-ursola-jazael-26647204.koyeb.app/api/v1/estadisticas/'; */
  private apiUrl = 'http://20.55.201.18:8000/api/v1/estadisticas/';
  /* private token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE5NjcwMDQxLCJpYXQiOjE3MTcwNzgwNDEsImp0aSI6IjQ5YWZjNjc3NjhhNDRhZWY4OTIyMTZhOGQ2NGFhYjkzIiwidXNlcl9pZCI6MX0.ArBVzGnU16ApHQdMikrlsGl3Kl1LR6tKjPjWWy21Vgk'; */
  

  constructor(private http: HttpClient) {}

  getEstadisticas(): Observable<ApiData> {
    return this.http.get<ApiData>(this.apiUrl);
  }
}