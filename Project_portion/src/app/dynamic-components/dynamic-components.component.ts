import { Component } from '@angular/core';
import { DynamicContainerComponent } from './dynamic-container/dynamic-container.component';
import {NgModule} from '@angular/core';

@Component({
  selector: 'app-dynamic-components',
  templateUrl: './dynamic-components.component.html',
  styleUrls: ['./dynamic-components.component.css']
  exports:[DynamicContainerComponent]
})
export class DynamicComponentsComponent {

}
