import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {   DishArrayService } from '../dishArray.service';

import { CartService } from '../cart.service';
// import { CreateTracingOptions } from 'trace_events';
// import { DishArrayService } from '../dishArray.service';
@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  providers: [DishArrayService],
})
export class CartComponent implements OnInit {
  count:number;
  countnumber=0;
  id: string = '';
  dishArray: any[] = [];
  dataArray:any[]=[];
  dish: any;
  data:any;
cartArray:any[]=[];
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private disharrayservice: DishArrayService,
   private cartService:CartService
  ) {}
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params.id);
      this.id = params['id'];
    });
    
    this.dishArray = this.disharrayservice.dishArray;
    // this.productList.forEach(a:any)=>{
    //   Object.assign(a,{quantity:1,total:a.price});
    // }
  this.cartArray=this.disharrayservice.cartArray;
    this.filterData();
    // this.filterDataArray();
  }
  // filterDataArray()
  // {
  //   const filterArray = this.dataArray.filter((data) => data.text === 'Your Cart');
  //   this.data=filterArray[0];
  // }
  filterData() {
    const filterArray = this.dishArray.filter((dish) => dish.id === this.id);
    this.dish = filterArray[0];
  }

  decreaseValue() {
    if (this.countnumber >= 1) this.countnumber = this.countnumber - 1;
    else this.countnumber = 0;
  }
  increaseValue() {
    this.countnumber = this.countnumber + 1;
  }
  navigateToDashboard() {
   this.cartArray.push({
    ...this.dish ,count:this.countnumber
   })
  //  this.addtoCart(this.dish);
   console.log(this.cartArray);
    this.router.navigate(['Dashboard']);
   
    
  }
  // addtoCart(item:any)
  //  {
  //   this.cartService.addtoCart(item);
  //  }
  
  // addToCart()
  // {
    
  // }
}
