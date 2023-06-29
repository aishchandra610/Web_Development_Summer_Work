import { Component, ViewContainerRef } from '@angular/core';
import { Router} from '@angular/router';
import { CartinfoComponent } from '../cartinfo/cartinfo.component';
@Component({
  selector: 'app-your-cart',
  templateUrl: './your-cart.component.html',
  styleUrls: ['./your-cart.component.css']
})
export class YourCartComponent { //implements OnInit{
  constructor(private router: Router) {}
button="Checkout";
// @ViewChild('container',{read:ViewContainerRef,static:true})
// container!:ViewContainerRef;
// createComponent()
// {
//   this.container.createComponent(CartinfoComponent);
// }s
navigateToCheckout()
{
  this.router.navigate(['Checkout']);
}
}
