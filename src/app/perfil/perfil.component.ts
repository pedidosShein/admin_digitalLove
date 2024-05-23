import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})

export class PerfilComponent implements OnInit{
  usuario: string | null = '';
  password: string | null = '';
  /* 
    usuario: 
    apellidoMaterno: "miranda"
    apellidoPaterno: "lopez"
    correo:"natalia@gmail.com"
    estado:"ACTIVO"
    id:3
    nombre:"natalia"
    tipoUsuario:"ADMIN"
   */

  ngOnInit(): void {
      this.usuario = localStorage.getItem('usuario');
      this.password = localStorage.getItem('password');
      /* this.password = ('*')*(this.password.length); */
  }
  
  
}
