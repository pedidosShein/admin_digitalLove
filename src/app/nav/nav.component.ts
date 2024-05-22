import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  constructor(private loginService: LoginService, private router: Router) { }
  logout():void{
    this.loginService.logout();
    this.router.navigate(['/']);
    console.log('Sesión cerrada');
  }

}
