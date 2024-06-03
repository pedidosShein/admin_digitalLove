import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})

export class PerfilComponent implements OnInit{
  usuario: string | null = '';
  password!: string | null;
  passwordOculta!: string;

  ngOnInit(): void {
      this.usuario = localStorage.getItem('usuario');
      this.password = localStorage.getItem('password');
      this.passwordOculta = this.ocultarContraseña(this.password);
  }
  
  ocultarContraseña(contraseña: string | null): string {
    if (contraseña === null) {
      return '';
    }
    return '*'.repeat(contraseña.length);
  }
}
