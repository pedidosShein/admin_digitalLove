import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'http://20.55.201.18:8000/api/v1/loginAdmin/';
  /* private token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE5NjcwMDQxLCJpYXQiOjE3MTcwNzgwNDEsImp0aSI6IjQ5YWZjNjc3NjhhNDRhZWY4OTIyMTZhOGQ2NGFhYjkzIiwidXNlcl9pZCI6MX0.ArBVzGnU16ApHQdMikrlsGl3Kl1LR6tKjPjWWy21Vgk'; */
  private token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIwMjgzMzE3LCJpYXQiOjE3MTc2OTEzMTcsImp0aSI6ImE5MTExOTU1MmNiODRjZTViMjIyMjkxYTc2NTBhMWRlIiwidXNlcl9pZCI6Nn0.faHmOSC0PT4Q_8hdn3qRFd8ZPJTwxjjsoCNZtmBGSck';

  constructor(private http: HttpClient) { }

  login(usuario: string, password: string): Observable<any> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token,
      'Content-Type': 'application/json'
    });

    const body = { 
      "usuario": usuario, 
      "password": password 
    };

    return this.http.post(this.apiUrl, body, { headers }).pipe(
      tap((response) => {
        console.log('Login successful:', response);
        localStorage.setItem('usuario', usuario);
        localStorage.setItem('password', password);
        console.log('guardado en localStorage');
      })
    );
  }

  logout(){
    localStorage.removeItem('usuario');
    localStorage.removeItem('password');
  }
}