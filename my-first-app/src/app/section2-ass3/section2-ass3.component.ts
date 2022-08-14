import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section2-ass3',
  templateUrl: './section2-ass3.component.html',
  styleUrls: ['./section2-ass3.component.css'],
})
export class Section2Ass3Component implements OnInit {
  display = false;
  log: number[] = [];
  num: number = 0;

  constructor() {}

  toggleDisplay() {
    this.display = !this.display;
    this.num += 1;
    this.log.push(this.num);
  }

  ngOnInit(): void {}
}
