import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-itemcount',
  templateUrl: './itemcount.component.html',
  styleUrls: ['./itemcount.component.css'],
})
export class ItemcountComponent {
  @Input() dataCount: string;
}
