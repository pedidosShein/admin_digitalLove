import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { LoginFormService } from '../services/login-form.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [
    LoginFormService
  ]
})

export class LoginComponent {
  loginForm!: FormGroup;

  constructor(
    //service de api
    private loginService: LoginService, 
    private formService: LoginFormService,
    private router: Router
  ) {}

  ngOnInit() {
    this.loginForm = this.formService.formulario();
  }
  
  /* validar(): void {
    this.loginService.login( this.loginForm.value.usuario, this.loginForm.value.contrasena
    ).subscribe(
      (response) => {
        console.log('Login successful:', response);
      },
      (error) => {
        console.error('Login error:', error);
      }
    );
  } */

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { username, contrasena } = this.loginForm.value;
      console.log("login");
      this.loginService.login(username, contrasena).subscribe(
        (response) => {
          console.log('Respuesta del servidor:', response);
        },
        (error) => {
          console.error('Invalid username or password', error);
        } 
      );
    }
  }


}