import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-orderinfo',
  templateUrl: './orderinfo.component.html',
  styleUrls: ['./orderinfo.component.css']
})
export class OrderinfoComponent {
 @Input() status;
}
