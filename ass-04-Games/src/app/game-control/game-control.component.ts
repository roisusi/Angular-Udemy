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

  constructor() {}

  ngOnInit(): void {}

  onStartTime() {
    this.globalInterval = setInterval(() => {
      this.intervallFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000);
  }
  onStopTime() {
    clearInterval(this.globalInterval);
  }
}
