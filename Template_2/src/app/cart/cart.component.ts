import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {   DishArrayService } from '../dishArray.service';


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

  ) {} 
  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      console.log(params.id);
      this.id = params['id'];
    });
    
    this.dishArray = this.disharrayservice.dishArray;
    
  this.cartArray=JSON.parse(JSON.stringify(this.disharrayservice.cartArray));
    this.filterData();
    
  }
  
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
  this.disharrayservice.cartArray=this.cartArray;
   console.log(this.cartArray,this.disharrayservice.cartArray);
    this.router.navigate(['Dashboard']);
   
    
  }
  
}

