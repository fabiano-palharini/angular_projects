import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  firstSubscription: Subscription;

  constructor() { }

  ngOnInit() {
    this.firstSubscription = interval(1000).subscribe(
                                (counter: number) => {
                                  console.log(counter);
                                }
                              );
  }

  ngOnDestroy() {
    this.firstSubscription.unsubscribe();
  }

}
