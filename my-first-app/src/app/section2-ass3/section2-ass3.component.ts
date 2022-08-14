import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-section2-ass3',
  templateUrl: './section2-ass3.component.html',
  styleUrls: ['./section2-ass3.component.css'],
})
export class Section2Ass3Component implements OnInit {
  display = false;
  log = [1];
  num: number = 1;

  constructor() {}

  toggleDisplay() {
    // this.display = !this.display;
    this.display = true;
    this.num += 1;
    this.log.push(this.num);
  }

  getColor() {
    if (this.num >= 5) {
      return 'blue';
    }
    return 'white';
  }

  ngOnInit(): void {}
}
