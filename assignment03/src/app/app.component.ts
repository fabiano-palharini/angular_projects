import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment03';
  items: Date[] = [];
  show: boolean = false;


  onClick() {
    this.show = !this.show;
    this.items.push(new Date());
    console.log(this.items);
  }
}
