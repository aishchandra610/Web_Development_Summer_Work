import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
})
export class InputComponent {
  @Input() textMessage: string = 'input';
  @Input() texttype: string;
  @Input() id: string = 'notakey';
  @Input() count: number = 0;

  showPassword() {
    this.count = this.count + 1;
    if (this.count % 2 != 0) this.texttype = 'text';
    else this.texttype = 'password';
  }
}
