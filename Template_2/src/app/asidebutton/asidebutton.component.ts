import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { DishArrayService } from '../dishArray.service';
import { OnInit } from '@angular/core';
@Component({
  selector: 'app-asidebutton',
  templateUrl: './asidebutton.component.html',
  styleUrls: ['./asidebutton.component.css'],
  providers: [DishArrayService]
})
export class AsidebuttonComponent  implements OnInit {
  constructor(private router: Router,private disharrayservice: DishArrayService,) {}
  @Input() data: any;
  public totalItem:number=0;
  cartArray:any[]=[];
  check: any;
  navigateToRoute(route) {
    this.router.navigate([route]);
  }
 ngOnInit()
  {
    
    this.cartArray=this.disharrayservice.cartArray;
    this.totalItem=this.cartArray.length;
    console.log(this.totalItem);
  }
  // datacount:number=this.cartArray.length;
}
