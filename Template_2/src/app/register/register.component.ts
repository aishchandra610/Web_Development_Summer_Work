import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent {
  constructor(private router: Router) {}
  registerButton: string = 'SIGNUP';
  inputName: string = 'Your First Name';
  inputEmail: string = 'Your Email address';
  inputPassword: string = 'Your Password';
  check: string = 'key';
  notcheck: string = 'notakey';
  countnumber: number = 0;
  text: string = 'text';
  password: string = 'password';
  navigateToDashboardPage() {
    this.router.navigate(['Dashboard']);
  }
  navigateToLoginPage() {
    this.router.navigate(['Login']);
  }
}
