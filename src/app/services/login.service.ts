import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'https://gigantic-mora-jazael-3245dd16.koyeb.app/api/v1/loginAdmin/';
  private token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE3NjM1NzUyLCJpYXQiOjE3MTUwNDM3NTIsImp0aSI6IjZiNmNhYjk1NTlmNTRiMDFiZWU1MWEyYjVhMDY3NjdiIiwidXNlcl9pZCI6Mn0.NqvfTuAY4OL9ZsYhXCiYchbvXZ8_d1DoBdLnFLWZz1o';


  constructor(private http: HttpClient) { }

  /* ingresar(): Promise<boolean> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
    let url= this.http.get(this.apiUrl, { headers });
    
    return new Promise<boolean>((resolve, reject) => {
      url.subscribe(
          (response) => {
              console.log('Usuario Ingresando', response);
              resolve(true);
          },
          (error) => {
              console.error('Error', error);
              reject(false);
          }
      );
    });
  } */

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