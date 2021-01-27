import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'assignment04';
  numbers: number[] = [];

  onStart(counter: number){
    console.log('contador: ' + counter);
    this.numbers.push(counter);
  }
}
