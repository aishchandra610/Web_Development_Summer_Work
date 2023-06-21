import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  registerButton:string="SIGNUP";
  inputName:string="Your First Name";
  inputEmail:string="Your Email address";
  inputPassword:string="Your Password";
}
