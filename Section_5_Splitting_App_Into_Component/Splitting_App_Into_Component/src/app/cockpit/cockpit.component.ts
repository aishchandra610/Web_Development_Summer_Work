import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent {
  newServerName = '';
 @Output() serverCreated= new EventEmitter<{serverName:string,serverContent:string}>();
  @Output('bpCreated') blueprintCreated=new EventEmitter<{serverName:string,serverContent:string}>();
  newServerContent = '';

  onAddServer() 
  {
    this.serverCreated.emit({serverName:this.newServerName,
    serverContent:this.newServerContent});
  }
  onAddBlueprint() 
  {
    this.serverCreated.emit({

      serverName:this.newServerName,
      serverContent:this.newServerContent
    });
  }
}
