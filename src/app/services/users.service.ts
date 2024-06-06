import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  /* private apiUrl = 'https://better-ursola-jazael-26647204.koyeb.app/api/v1/usuariosApp';
  private token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE5NjcwMDQxLCJpYXQiOjE3MTcwNzgwNDEsImp0aSI6IjQ5YWZjNjc3NjhhNDRhZWY4OTIyMTZhOGQ2NGFhYjkzIiwidXNlcl9pZCI6MX0.ArBVzGnU16ApHQdMikrlsGl3Kl1LR6tKjPjWWy21Vgk'; */
  private apiUrl = 'http://20.55.201.18:8000/api/v1/usuariosApp/';
  /* private token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzE5NjcwMDQxLCJpYXQiOjE3MTcwNzgwNDEsImp0aSI6IjQ5YWZjNjc3NjhhNDRhZWY4OTIyMTZhOGQ2NGFhYjkzIiwidXNlcl9pZCI6MX0.ArBVzGnU16ApHQdMikrlsGl3Kl1LR6tKjPjWWy21Vgk'; */
  private token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzIwMjgzMzE3LCJpYXQiOjE3MTc2OTEzMTcsImp0aSI6ImE5MTExOTU1MmNiODRjZTViMjIyMjkxYTc2NTBhMWRlIiwidXNlcl9pZCI6Nn0.faHmOSC0PT4Q_8hdn3qRFd8ZPJTwxjjsoCNZtmBGSck';


  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    const headers = new HttpHeaders({
      'Authorization': 'Bearer ' + this.token
    });
    return this.http.get<User[]>(this.apiUrl, { headers });
  }
}