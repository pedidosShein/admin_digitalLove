import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BloqueoService {
  private apiUrl = 'https://better-ursola-jazael-26647204.koyeb.app/api/v1/bloquearUsuario/{usuario_id}/';
  private token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE5NjcwMDQxLCJpYXQiOjE3MTcwNzgwNDEsImp0aSI6IjQ5YWZjNjc3NjhhNDRhZWY4OTIyMTZhOGQ2NGFhYjkzIiwidXNlcl9pZCI6MX0.ArBVzGnU16ApHQdMikrlsGl3Kl1LR6tKjPjWWy21Vgk';

  
  constructor(private http: HttpClient) { }

  setBloqueo(usuario_id: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token,
      'Content-Type': 'application/json'
    });

    const body = {
      "usuario_id": usuario_id,
    }

    return this.http.post(this.apiUrl, body, { headers }).pipe(
      map((res: any) => {
        localStorage.setItem('usuario_id', usuario_id);
        console.log('usuario bloqueado');
      })
    );
  }
}
