import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput', {static: false}) serverContent: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(serverName: HTMLInputElement) {
    this.serverCreated.emit(
      // {serverName: this.newServerName,
      {serverName: serverName.value,
      //  serverContent: this.newServerContent
       serverContent: this.serverContent.nativeElement.value
    });
  }

  onAddBlueprint(serverName: HTMLInputElement) {
    // this.blueprintCreated.emit({serverName: serverName.value, serverContent: this.newServerContent});
    this.blueprintCreated.emit({serverName: serverName.value, serverContent: this.serverContent.nativeElement.value});
  }

}
