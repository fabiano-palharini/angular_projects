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
    this.serverCreationStatus = "Server was created!";
    this.allowNewServer = false;
    this.onTimeout();
  }

  onUpdateServerName(event: Event){
    console.log((<Event>event).target);
  }

}
