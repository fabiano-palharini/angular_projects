import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() start = new EventEmitter<number>();
  interval_in_miliseconds = 1000;
  counter: number = 1;
  timer;

  // timer = function () {
  //   setInterval(function(){
  //     this.start.emit(this.counter);
  //     this.counter++;
  //   }, this.interval_in_miliseconds)
  // };

  constructor() { }

  ngOnInit(): void {
  }



  onStart() {
    console.log('start');
    this.timer = setInterval(() => {
        this.start.emit(this.counter);
        this.counter++;
      }, this.interval_in_miliseconds);
    // this.timer();
  }

  onStop() {
    console.log('stop');
    clearInterval(this.timer);
  }
}
