import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent {
  @Input() dish: any;
  // id=this.dish.id;
  constructor(private router: Router) {}
  navigateToCart(id)
  {
    this.router.navigate(['Cart',{id:id}]);
  }
}
