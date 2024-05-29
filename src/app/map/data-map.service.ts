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
  private apiUrl = 'http://localhost:8000/api/v1/estadisticas/';

  constructor(private http: HttpClient) {}

  getEstadisticas(): Observable<ApiData> {
    return this.http.get<ApiData>(this.apiUrl);
  }
}
