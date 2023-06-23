import { Component } from '@angular/core';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {
textMessages:any[]=[
  "Card Number","Exp Date","CVV/CVV2","Card Pin"
];
buttonLabel="Make Payment";
}
