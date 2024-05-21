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
    console.log('Formulario:', this.loginForm);
    console.log(this.loginForm.value);
    this.loginService.login( this.loginForm.value.usuario, this.loginForm.value.password
    ).subscribe(
      (response) => {
        console.log('Login successful:', response);
        this.router.navigate(['/panel']);
      },
      (error) => {
        console.error('Login error:', error);
      }
    );
  }
}