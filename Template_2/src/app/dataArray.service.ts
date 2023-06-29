export class DataArrayService
{
  dataArray: any[] = [
    {
      image: 'assets/icons/icon1.png',
      text: 'Dashboard',
      
      route: 'Dashboard'
    },
    {
      image: 'assets/icons/icon2.png',
      text: 'Your Profile',
      
      route: 'Dashboard'
    },
    {
      image: 'assets/icons/icon3.png',
      text: 'Orders',
      itemOrder: 0,
      route:'YourOrder',
      
    },
    {
      image: 'assets/icons/icon4.png',
      text: 'Your Cart',
      itemOrder: 0,
      route: 'YourCart',
    },
  ];
}