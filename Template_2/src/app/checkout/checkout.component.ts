import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css'],
})
export class CheckoutComponent {
  constructor(private router: Router) {}
  textMessages: any[] = ['Card Number', 'Exp Date', 'CVV/CVV2', 'Card Pin'];
  buttonLabel = 'Make Payment';
  navigateToDashboard() {
    this.router.navigate(['Dashboard']);
  }
}
