import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BloqueoService {
  private apiUrl = 'https://gigantic-mora-jazael-3245dd16.koyeb.app/api/v1/bloquearUsuario/{usuario_id}/';
  private token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE3NjM1NzUyLCJpYXQiOjE3MTUwNDM3NTIsImp0aSI6IjZiNmNhYjk1NTlmNTRiMDFiZWU1MWEyYjVhMDY3NjdiIiwidXNlcl9pZCI6Mn0.NqvfTuAY4OL9ZsYhXCiYchbvXZ8_d1DoBdLnFLWZz1o';

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
