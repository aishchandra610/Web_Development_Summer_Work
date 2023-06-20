import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Template_2';
  registerText:string="Enter your email id";
  inputName:string="Your First Name";
  inputEmail:string="Your Email address";
  inputPassword:string="Your Password";
  loginButton:string="LOGIN";
  registerButton:string="SIGNUP"
}
