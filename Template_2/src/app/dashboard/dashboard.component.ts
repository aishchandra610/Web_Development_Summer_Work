import { Component, OnInit } from '@angular/core';
import {  DishArrayService} from '../dishArray.service';
import {DataArrayService} from '../dataArray.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers:[DishArrayService,DataArrayService]
})
export class DashboardComponent implements OnInit{
  
  dataArray:any[]=[];
  dishArray:any[]=[];
  constructor(private disharrayservice:DishArrayService,private dataarrayservice:DataArrayService){}
  ngOnInit(): void {
    this.dishArray=this.disharrayservice.dishArray;
  this.dataArray=this.dataarrayservice.dataArray;
  this.dataArray[3].itemcount=0;//initialize with the size of cart array service

  }
}
