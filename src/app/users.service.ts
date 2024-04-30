import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  private apiUrl = 'http://frantic-livvyy-jazael.koyeb.app/docs/api/v1/usuarios/'

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.apiUrl);
  }


}
