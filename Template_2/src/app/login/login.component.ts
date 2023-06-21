import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor (private router:Router) {
  
  }
  inputEmail:string="Your Email address";
  inputPassword:string="Your Password";
  loginButton:string="LOGIN";
  navigateToRegisterPage()
  {
    this.router.navigate(['Register']);
  }
  navigateToDashboardPage()
  {
    this.router.navigate(['Dashboard']);
  }
}
