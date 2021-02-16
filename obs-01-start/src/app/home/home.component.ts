import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription, Observable, Observer } from 'rxjs';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  firstSubscription: Subscription;
  customIntervalObservable: Observable<number>;

  constructor() { }

  ngOnInit() {
    // this.firstSubscription = interval(1000).subscribe(
    //                             (counter: number) => {
    //                               console.log(counter);
    //                             }
    //                           );
    this.customIntervalObservable = Observable.create(
      (observer: Observer<number>) => {
        let counter: number = 0;
        setInterval(() => {
          observer.next(counter++);
          if (counter === 2) {
            observer.complete();
          }
          if (counter > 3) {
            observer.error('We had an issue!');
          }
        }, 1000);
      }
    );

    this.firstSubscription = this.customIntervalObservable.subscribe(
      (dataFromObservable) => {
        console.log(dataFromObservable);
      }
    , (error) => {
      console.log(error);
    },
    () => {
      console.log('completed!');
    })
  }

  ngOnDestroy() {
    this.firstSubscription.unsubscribe();
  }

}
