import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created!';
  serverName: string = 'DELL EMC';


  constructor() {
    this.onTimeout();
  }

  ngOnInit(): void {
  }

  onTimeout() {
    setTimeout( () => {
      this.allowNewServer = true
    }, 2000);
  }

  onCreateServer(){
    this.serverCreationStatus = "Server was created! The name is " + this.serverName;
    this.allowNewServer = false;
    this.onTimeout();
  }

  onUpdateServerName(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
