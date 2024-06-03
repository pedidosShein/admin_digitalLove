import { Component, OnInit } from '@angular/core';
import { AdministradorService } from '../services/administrador.service';
import { admin } from '../models/admin.model';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})

export class PerfilComponent implements OnInit{
  usuario: string | null = '';
  password!: string | null;
  passwordOculta!: string;
  admin: admin[] = [];

  constructor (
    private adminService: AdministradorService
  ) { }

  ngOnInit(): void {
      this.usuario = localStorage.getItem('usuario');
      this.password = localStorage.getItem('password');
      this.passwordOculta = this.ocultarContraseña(this.password);

      this.adminService.getAdmin().subscribe(
        (res) => {
          this.admin = res;
          console.log('Usuarios obtenidos:', res);
        },
        (error) => {
          console.log('Error al obtener los usuarios:', error);
        });
  }
  
  ocultarContraseña(contraseña: string | null): string {
    if (contraseña === null) {
      return '';
    }
    return '*'.repeat(contraseña.length);
  }
}
