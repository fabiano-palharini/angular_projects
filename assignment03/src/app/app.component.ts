import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment03';
  numberOfClicks: number[] = [];
  counter: number = 0;

  onClick() {
    this.numberOfClicks.push((this.numberOfClicks).length + 1);
    this.counter++;
    console.log(this.counter);
  }
}
