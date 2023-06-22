import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-asidebutton',
  templateUrl: './asidebutton.component.html',
  styleUrls: ['./asidebutton.component.css'],
})
export class AsidebuttonComponent {
  @Input() data: any;
}
