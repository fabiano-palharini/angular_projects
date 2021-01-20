import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment02';
  disableButton: boolean = true;
  username: string = "";


  resetUsername() {
    this.username = "";
  }

  onTyping() {
    if (this.username!==''){
      this.disableButton=false;
    }
  }
}
