import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, tap, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'https://gigantic-mora-jazael-3245dd16.koyeb.app/api/v1/loginAdmin/';
  private token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE3NjM1NzUyLCJpYXQiOjE3MTUwNDM3NTIsImp0aSI6IjZiNmNhYjk1NTlmNTRiMDFiZWU1MWEyYjVhMDY3NjdiIiwidXNlcl9pZCI6Mn0.NqvfTuAY4OL9ZsYhXCiYchbvXZ8_d1DoBdLnFLWZz1o';

  private ws!: WebSocket;
  private mensajeSubject = new Subject<any>();

  constructor(private http: HttpClient) {
    this.mensajeSubject = new Subject<any>();
   }

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


  public connect(url: string): void {
    this.ws = new WebSocket(url);

    this.ws.onopen = (event) => {
      console.log('WebSocket connection opened:', event);
    };

    this.ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      this.mensajeSubject.next(data);
    };

    this.ws.onclose = (event) => {
      console.log('WebSocket connection closed:', event);
    };

    this.ws.onerror = (event) => {
      console.error('WebSocket error:', event);
    };
  }

  public sendMessage(message: any): void {
    this.ws.send(JSON.stringify(message));
  }

  public getMessages(): Observable<any> {
    return this.mensajeSubject.asObservable();
  }

}