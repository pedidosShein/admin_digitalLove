import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NotificacionesService {
  private apiUrl = 'https://gigantic-mora-jazael-3245dd16.koyeb.app/api/v1/reportes/';
  private token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE3NjM1NzUyLCJpYXQiOjE3MTUwNDM3NTIsImp0aSI6IjZiNmNhYjk1NTlmNTRiMDFiZWU1MWEyYjVhMDY3NjdiIiwidXNlcl9pZCI6Mn0.NqvfTuAY4OL9ZsYhXCiYchbvXZ8_d1DoBdLnFLWZz1o';

  constructor(private http: HttpClient) { }

  getReportes(): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
    return this.http.get(this.apiUrl, { headers });
  }

  
}
