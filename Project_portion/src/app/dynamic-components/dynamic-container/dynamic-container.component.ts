import { Component,OnInit,ViewChild,ViewContainerRef } from '@angular/core';
import { Comp1Component } from 'src/app/comp1/comp1.component';
import { Comp2Component } from 'src/app/comp2/comp2.component';
import { Comp3Component } from 'src/app/comp3/comp3.component';
@Component({
  selector: 'app-dynamic-container',
  templateUrl: './dynamic-container.component.html',
  styleUrls: ['./dynamic-container.component.css']
})
export class DynamicContainerComponent  implements OnInit
{
@ViewChild('container',{read:ViewContainerRef,static:true});
container!:ViewContaninerRef;
productName:any={
  comp1:'comp1',
  comp2:'comp2',
  comp3:'comp3',
};
constructor(){}
createComponent(componentName:string)
{
  this.container.clear();
  const getComponentType=this.getComponentType(componentName);
  this.container.createComponent(Comp1Component)
}
getComponentType(name:string)
{
  let type:any=Comp1Component;
  switch(name)
  {
    case this.productName.comp1:{
      type=Comp1Component;
      break;
    }
    case this.productName.comp2:{
      type=Comp2Component;
      break;
    }
    case this.productName.comp3:{
      type=Comp3Component;
      break;
    }
  }
  return type;
}

}