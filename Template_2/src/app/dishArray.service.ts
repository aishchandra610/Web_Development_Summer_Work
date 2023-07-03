import { BehaviorSubject } from 'rxjs';

export class DishArrayService
{
    cartArray:any[]=[];
    cartlength=this.cartArray.length;
   dishArray:any[]= [
    {
      id:"1",
      name: 'Stir Fry Pasta',
      description: 'The in-house pasta and chicken by chef Moose',
      price: 'N 1000.00',
      imgPath: 'assets/images/dish-image1.png',
      cartheading: "head1",
      carttext:
        'Just have a single bite of this Black Forest pastry and it will all make a proper sense to you. The kick of cherry and rich chocolate of this super light, airy pastry will definitely make you feel "wow". The perfect combination of cherry cream and rich chocolate can provide the ultimate fulfillment to your dessert craving.',
    },
    {
      id:"2",
      name: 'Stir Fry Pasta',
      description: 'The in-house pasta and chicken by chef Moose',
      price: 'N 1000.00',
      imgPath: 'assets/images/dish-image2.png',
      cartheading: 'head2',
      carttext:
        'Just have a single bite of this Black Forest pastry and it will all make a proper sense to you. The kick of cherry and rich chocolate of this super light, airy pastry will definitely make you feel "wow". The perfect combination of cherry cream and rich chocolate can provide the ultimate fulfillment to your dessert craving.',
    },
    {
      id:"3",
      name: 'Stir Fry Pasta',
      description: 'The in-house pasta and chicken by chef Moose',
      price: 'N 1000.00',
      imgPath: 'assets/images/dish-image3.png',
      cartheading: 'Blueberry Toasts and smoothie',
      carttext:
        'Just have a single bite of this Black Forest pastry and it will all make a proper sense to you. The kick of cherry and rich chocolate of this super light, airy pastry will definitely make you feel "wow". The perfect combination of cherry cream and rich chocolate can provide the ultimate fulfillment to your dessert craving.',
    },
    {
      id:"4",
      name: 'Stir Fry Pasta',
      description: 'The in-house pasta and chicken by chef Moose',
      price: 'N 1000.00',
      imgPath: 'assets/images/dish-image4.png',
      cartheading: 'Blueberry Toasts and smoothie',
      carttext:
        'Just have a single bite of this Black Forest pastry and it will all make a proper sense to you. The kick of cherry and rich chocolate of this super light, airy pastry will definitely make you feel "wow". The perfect combination of cherry cream and rich chocolate can provide the ultimate fulfillment to your dessert craving.',
    },
    {
      id:"5",
      name: 'Stir Fry Pasta',
      description: 'The in-house pasta and chicken by chef Moose',
      price: 'N 1000.00',
      imgPath: 'assets/images/dish-image1.png',
      cartheading: 'Blueberry Toasts and smoothie',
      carttext:
        'Just have a single bite of this Black Forest pastry and it will all make a proper sense to you. The kick of cherry and rich chocolate of this super light, airy pastry will definitely make you feel "wow". The perfect combination of cherry cream and rich chocolate can provide the ultimate fulfillment to your dessert craving.',
    },
    {
      id:"6",
      name: 'Stir Fry Pasta',
      description: 'The in-house pasta and chicken by chef Moose',
      price: 'N 1000.00',
      imgPath: 'assets/images/dish-image6.png',
      cartheading: 'Blueberry Toasts and smoothie',
      carttext:
        'Just have a single bite of this Black Forest pastry and it will all make a proper sense to you. The kick of cherry and rich chocolate of this super light, airy pastry will definitely make you feel "wow". The perfect combination of cherry cream and rich chocolate can provide the ultimate fulfillment to your dessert craving.',
    },
    {
      id:"7",
      name: 'Stir Fry Pasta',
      description: 'The in-house pasta and chicken by chef Moose',
      price: 'N 1000.00',
      imgPath: 'assets/images/dish-image1.png',
      cartheading: 'Blueberry Toasts and smoothie',
      carttext:
        'Just have a single bite of this Black Forest pastry and it will all make a proper sense to you. The kick of cherry and rich chocolate of this super light, airy pastry will definitely make you feel "wow". The perfect combination of cherry cream and rich chocolate can provide the ultimate fulfillment to your dessert craving.',
    },
  ];
  public cartItemList:any=[]
public productList=new BehaviorSubject<any>([]);
  getProducts()
  {
    return this.productList.asObservable();
  }
  setProduct(product:any)
  {
    this.cartItemList.push(...product);
    this.productList.next(product);
  }
  addtoCart(product:any)
  {
    this.cartItemList.PUSH(product);
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
  console.log(this.cartItemList);

  }
  getTotalPrice()
  {
    let grandTotal=0;
    this.cartItemList.map((a:any)=>{
      grandTotal+=a.totoal;
    })
  }
  removeCartItem(product:any)
  {
    this.cartItemList.map((a:any,index:any)=>{
      if(product.id===a.id)
      {
        this.cartItemList.splice(index,1);
      }
    })  
  }
}
