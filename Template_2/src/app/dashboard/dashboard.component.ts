import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  dataArray: any[] = [
    {
      image: 'assets/icons/icon1.png',
      text: 'Dashboard',
      itemOrder: '',
    },
    {
      image: 'assets/icons/icon2.png',
      text: 'Your Profile',
      itemOrder: '',
    },
    {
      image: 'assets/icons/icon3.png',
      text: 'Orders',
      itemOrder: '6',
    },
    {
      image: 'assets/icons/icon4.png',
      text: 'Your Cart',
      itemOrder: '6',
    },
  ];

  dishArray: any[] = [
    {
      name: 'Stir Fry Pasta',
      description: 'The in-house pasta and chicken by chef Moose',
      price: 'N 1000.00',
      imgPath: 'assets/images/dish-image1.png',
    },
    {
      name: 'Stir Fry Pasta',
      description: 'The in-house pasta and chicken by chef Moose',
      price: 'N 1000.00',
      imgPath: 'assets/images/dish-image2.png',
    },
    {
      name: 'Stir Fry Pasta',
      description: 'The in-house pasta and chicken by chef Moose',
      price: 'N 1000.00',
      imgPath: 'assets/images/dish-image3.png',
    },
    {
      name: 'Stir Fry Pasta',
      description: 'The in-house pasta and chicken by chef Moose',
      price: 'N 1000.00',
      imgPath: 'assets/images/dish-image4.png',
    },
    {
      name: 'Stir Fry Pasta',
      description: 'The in-house pasta and chicken by chef Moose',
      price: 'N 1000.00',
      imgPath: 'assets/images/dish-image1.png',
    },
    {
      name: 'Stir Fry Pasta',
      description: 'The in-house pasta and chicken by chef Moose',
      price: 'N 1000.00',
      imgPath: 'assets/images/dish-image6.png',
    },
    {
      name: 'Stir Fry Pasta',
      description: 'The in-house pasta and chicken by chef Moose',
      price: 'N 1000.00',
      imgPath: 'assets/images/dish-image1.png',
    },
  ];
}
