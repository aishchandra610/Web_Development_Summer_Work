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
      route: 'Dashboard'
    },
    {
      image: 'assets/icons/icon2.png',
      text: 'Your Profile',
      itemOrder: '',
      route: 'Dashboard'
    },
    {
      image: 'assets/icons/icon3.png',
      text: 'Orders',
      itemOrder: '6',
      route:'YourOrder',
      
    },
    {
      image: 'assets/icons/icon4.png',
      text: 'Your Cart',
      itemOrder: '6',
      route: 'YourCart',
    },
  ];

  dishArray: any[] = [
    {
      id:1,
      name: 'Stir Fry Pasta',
      description: 'The in-house pasta and chicken by chef Moose',
      price: 'N 1000.00',
      imgPath: 'assets/images/dish-image1.png',
      cartheading: 'Blueberry Toasts and smoothie',
      carttext:
        'Just have a single bite of this Black Forest pastry and it will all make a proper sense to you. The kick of cherry and rich chocolate of this super light, airy pastry will definitely make you feel "wow". The perfect combination of cherry cream and rich chocolate can provide the ultimate fulfillment to your dessert craving.',
    },
    {
      id:2,
      name: 'Stir Fry Pasta',
      description: 'The in-house pasta and chicken by chef Moose',
      price: 'N 1000.00',
      imgPath: 'assets/images/dish-image2.png',
      cartheading: 'Blueberry Toasts and smoothie',
      carttext:
        'Just have a single bite of this Black Forest pastry and it will all make a proper sense to you. The kick of cherry and rich chocolate of this super light, airy pastry will definitely make you feel "wow". The perfect combination of cherry cream and rich chocolate can provide the ultimate fulfillment to your dessert craving.',
    },
    {
      id:3,
      name: 'Stir Fry Pasta',
      description: 'The in-house pasta and chicken by chef Moose',
      price: 'N 1000.00',
      imgPath: 'assets/images/dish-image3.png',
      cartheading: 'Blueberry Toasts and smoothie',
      carttext:
        'Just have a single bite of this Black Forest pastry and it will all make a proper sense to you. The kick of cherry and rich chocolate of this super light, airy pastry will definitely make you feel "wow". The perfect combination of cherry cream and rich chocolate can provide the ultimate fulfillment to your dessert craving.',
    },
    {
      id:4,
      name: 'Stir Fry Pasta',
      description: 'The in-house pasta and chicken by chef Moose',
      price: 'N 1000.00',
      imgPath: 'assets/images/dish-image4.png',
      cartheading: 'Blueberry Toasts and smoothie',
      carttext:
        'Just have a single bite of this Black Forest pastry and it will all make a proper sense to you. The kick of cherry and rich chocolate of this super light, airy pastry will definitely make you feel "wow". The perfect combination of cherry cream and rich chocolate can provide the ultimate fulfillment to your dessert craving.',
    },
    {
      id:5,
      name: 'Stir Fry Pasta',
      description: 'The in-house pasta and chicken by chef Moose',
      price: 'N 1000.00',
      imgPath: 'assets/images/dish-image1.png',
      cartheading: 'Blueberry Toasts and smoothie',
      carttext:
        'Just have a single bite of this Black Forest pastry and it will all make a proper sense to you. The kick of cherry and rich chocolate of this super light, airy pastry will definitely make you feel "wow". The perfect combination of cherry cream and rich chocolate can provide the ultimate fulfillment to your dessert craving.',
    },
    {
      id:6,
      name: 'Stir Fry Pasta',
      description: 'The in-house pasta and chicken by chef Moose',
      price: 'N 1000.00',
      imgPath: 'assets/images/dish-image6.png',
      cartheading: 'Blueberry Toasts and smoothie',
      carttext:
        'Just have a single bite of this Black Forest pastry and it will all make a proper sense to you. The kick of cherry and rich chocolate of this super light, airy pastry will definitely make you feel "wow". The perfect combination of cherry cream and rich chocolate can provide the ultimate fulfillment to your dessert craving.',
    },
    {
      id:7,
      name: 'Stir Fry Pasta',
      description: 'The in-house pasta and chicken by chef Moose',
      price: 'N 1000.00',
      imgPath: 'assets/images/dish-image1.png',
      cartheading: 'Blueberry Toasts and smoothie',
      carttext:
        'Just have a single bite of this Black Forest pastry and it will all make a proper sense to you. The kick of cherry and rich chocolate of this super light, airy pastry will definitely make you feel "wow". The perfect combination of cherry cream and rich chocolate can provide the ultimate fulfillment to your dessert craving.',
    },
  ];
  
  
}
