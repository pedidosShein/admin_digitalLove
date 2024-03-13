import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  loginForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ){}

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

  onSubmit() {
    if (this.loginForm.valid) {
    }
  }

}
