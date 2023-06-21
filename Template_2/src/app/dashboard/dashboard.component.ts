import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  dataOne={
    image:"",
    text:"Dashboard"
  };
  dataTwo={
    image:"imge",
    text:"Your Profile"
  };
  dataThree={
    image:"imge",
    text:"Orders"
  };
  dataFour={
    image:"imge",
    text:"Your Cart"
  };
  textHead="Stir Fry Pasta";
  textPara="The in-house pasta and chicken by chef Moose";
  textCost="N1000.00";
  contentOne=["img1","img2","img3"];
  contentTwo=["img4","img5","img6"]

}
