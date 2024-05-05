import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginForm!: FormGroup;

  constructor(private loginService: LoginService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.loginForm=this.formBuilder.group({
      usuario: [
        '',
        [Validators.required,
        Validators.pattern(/^[A-Za-z0-9._%+-]{8}$/),
        ],
      ],
      contrasena: [
        '',
        [Validators.required, Validators.pattern(/^[a-zA-Z0-9!@#$%^&*]{8}$/)],
      ],
    });
  }

  onSubmit(): void {
    this.loginService.login({ username: this.username, password: this.password }).subscribe(
      (response) => {
        console.log('Login successful:', response);
      },
      (error) => {
        console.error('No válido:', error);
      }
    );
  }

  

}