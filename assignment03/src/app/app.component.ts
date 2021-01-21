import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment03';
  numberOfClicks: number[] = [];
  show: boolean = false;


  onClick() {
    this.show = !this.show;
    this.numberOfClicks.push((this.numberOfClicks).length + 1);
    console.log(this.numberOfClicks);
  }
}
