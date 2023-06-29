import { Component ,Input, OnInit} from '@angular/core';
import {   DishArrayService } from '../dishArray.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-cartinfo',
  templateUrl: './cartinfo.component.html',
  styleUrls: ['./cartinfo.component.css'],
  providers: [DishArrayService],
})
export class CartinfoComponent implements OnInit{
   cartArray:any[]=[];
   constructor(
    private router: Router,
    private route: ActivatedRoute,
    private disharrayservice: DishArrayService,
   
  ) {}
  ngOnInit(): void {
   this.cartArray=this.disharrayservice.cartArray;
  }

}
