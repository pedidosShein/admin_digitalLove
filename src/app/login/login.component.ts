import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { LoginFormService } from '../services/login-form.service';
import { Router } from '@angular/router';
import { data } from 'cypress/types/jquery';

/* import { Client } from '@stomp/stompjs';
import * as SockJS from 'sockjs-client'; */

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [ LoginFormService ]
})

export class LoginComponent implements OnInit{
  loginForm!: FormGroup;
  /* private cliente: Client | undefined; */

  constructor(
    private loginService: LoginService, 
    private formService: LoginFormService,
    private router: Router
  ) {}

  ngOnInit(): void {
    /* this.cliente = new Client();
    this.cliente.webSocketFactory = () => {
      return new SockJS('http://localhost:8080/ws');
    } */

    this.loginForm = this.formService.formulario();

    this.loginService.connect('ws://20.55.201.18:8000/api/v1/loginAdmin/');
    this.loginService.getMessages().subscribe((message) => {
      console.log(message);
    });
    //ejemplo de login
    this.login('username', 'password');

  }

  login(username: string, password: string): void {
    const loginMensaje = {
      type: 'login',
      data: { username, password },
    };
    this.loginService.sendMessage(loginMensaje);
  }
  

  onSubmit(): void {
    console.log(this.loginForm.value);
    this.loginService.login( this.loginForm.value.usuario, this.loginForm.value.password
    ).subscribe(
      (response) => {
        console.log('Login successful:', response);
        this.router.navigate(['/panel']);
      },
      (error) => {
        console.error('Login error:', error);
        alert("Datos incorrectos");
      }
    );
  }
}