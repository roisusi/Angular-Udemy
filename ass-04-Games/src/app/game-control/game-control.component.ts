import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css'],
})
export class GameControlComponent implements OnInit {
  globalInterval: NodeJS.Timer;
  @Output() intervallFired = new EventEmitter<number>();
  lastNumber: number = 0;
  evenNumbers: number[] = [];
  oddNumbers: number[] = [];

  constructor() {}

  ngOnInit(): void {}

  onStartTime() {
    this.globalInterval = setInterval(() => {
      this.intervallFired.emit(this.lastNumber + 1);
      if (this.lastNumber % 2 === 0) {
        this.evenNumbers.push(this.lastNumber);
      } else {
        this.oddNumbers.push(this.lastNumber);
      }
      this.lastNumber++;
    }, 1000);
  }
  onStopTime() {
    clearInterval(this.globalInterval);
  }
}
