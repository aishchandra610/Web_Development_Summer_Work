import { Component,Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  count=0;
  
  
 
  constructor(private router: Router) {}
  decreaseValue()
  {
    if(this.count>=1)
    this.count=this.count-1;
    else
    this.count=0;
  }
  increaseValue()
  {
    this.count=this.count+1;
  }
  navigateToDashboard()
  {
    this.router.navigate(['Dashboard']);
  }
  
}
