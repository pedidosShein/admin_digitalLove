import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

interface ApiData {
  ubicaciones: { [estado: string]: number };
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
