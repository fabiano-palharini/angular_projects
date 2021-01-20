import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created!';
  serverName: string = '';
  showServer: boolean = false;
  color: string;
  fontColor: boolean;
  servers: string[] = ['Test Server 1', 'Test Server 2'];

  constructor() {
    this.onTimeout();
    if (Math.random() > 0.5) {
      this.color = 'green';
      this.fontColor = true;
    } else {
      this.color = 'red';
    } this.fontColor = false;
  }

  ngOnInit(): void {
  }

  onTimeout() {
    setTimeout( () => {
      this.allowNewServer = true
    }, 2000);
  }

  onCreateServer(){
    if (this.serverName ==='') {
      this.showServer = false;
    } else {
      this.showServer = true;
      this.serverCreationStatus = "Server was created! The name is " + this.serverName;
      this.allowNewServer = false;
      this.onTimeout();
      this.servers.push(this.serverName);
      this.serverName = '';
    }
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  getColor() {
    return true;
  }


}
