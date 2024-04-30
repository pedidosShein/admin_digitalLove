import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import {  User } from '../models/user.model';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.css']
})

export class UsuariosComponent implements OnInit{
  users: User[] = [];

  constructor (private userService : UsersService) {}

  ngOnInit(): void {
      this.userService.getUsers().subscribe(
        (users) => {
          this.users = users;
        },
        (error) => {
          console.log('Error al obtener los usuarios:', error);
        });
    }
    
}