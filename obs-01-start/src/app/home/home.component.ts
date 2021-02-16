import { Component, OnInit, OnDestroy } from '@angular/core';
import { interval, Subscription, Observable, Observer, Operator } from 'rxjs';
import { map, filter } from 'rxjs/operators'


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  firstSubscription: Subscription;
  customIntervalObservable: Observable<number>;
  operatorsObs: Observable<any>;

  constructor() { }

  ngOnInit() {
    this.customIntervalObservable = Observable.create(
      (observer: Observer<number>) => {
        let counter: number = 0;
        setInterval(() => {
          observer.next(counter++);
          if (counter === 10) {
            observer.complete();
          }
          if (counter > 11) {
            observer.error('We had an issue!');
          }
        }, 1000);
      }
    );

    this.operatorsObs = this.customIntervalObservable.pipe(
      filter(
        (data: number) => {
          return data % 2 === 0;
        }
      ),
      map(
        (data: number) => {
          return "This number is " + data;
        }
    ));


    this.firstSubscription = this.operatorsObs.subscribe(
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
