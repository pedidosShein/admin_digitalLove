import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { admin } from '../models/admin.model';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  private apiUrl = 'https://better-ursola-jazael-26647204.koyeb.app/api/v1/usuariosAdmin';
  private token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE5NjcwMDQxLCJpYXQiOjE3MTcwNzgwNDEsImp0aSI6IjQ5YWZjNjc3NjhhNDRhZWY4OTIyMTZhOGQ2NGFhYjkzIiwidXNlcl9pZCI6MX0.ArBVzGnU16ApHQdMikrlsGl3Kl1LR6tKjPjWWy21Vgk';

  constructor(private http: HttpClient) { }

  getAdmin(): Observable<admin[]>{
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
    return this.http.get<admin[]>(this.apiUrl, { headers });
  }
}
