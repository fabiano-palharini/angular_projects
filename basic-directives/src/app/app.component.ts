import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basic-directives';
  onlyOdd = false;
  odds = [1,3,5];
  evens = [2,4];
  value = 10000;
}
