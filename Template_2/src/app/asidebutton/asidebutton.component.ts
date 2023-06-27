import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-asidebutton',
  templateUrl: './asidebutton.component.html',
  styleUrls: ['./asidebutton.component.css'],
})
export class AsidebuttonComponent {
  constructor(private router: Router) {}
  @Input() data: any;

  check: any;
  navigateToRoute(route) {
    this.router.navigate([route]);
  }
}
