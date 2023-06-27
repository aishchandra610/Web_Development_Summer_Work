import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-your-cart',
  templateUrl: './your-cart.component.html',
  styleUrls: ['./your-cart.component.css']
})
export class YourCartComponent {
  constructor(private router: Router) {}
button="Checkout";
navigateToCheckout()
{
  this.router.navigate(['Checkout']);
}
}
