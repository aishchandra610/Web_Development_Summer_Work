import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css'],
})
export class DetailComponent {
  @Input() dish: any;
  constructor(private router: Router) {}
  navigateToCart()
  {
    this.router.navigate(['Cart']);
  }
}
