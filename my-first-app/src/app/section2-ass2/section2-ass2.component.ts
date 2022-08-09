import { Component, OnInit } from '@angular/core';

@Component({
  selector: '.app-section2-ass2',
  templateUrl: './section2-ass2.component.html',
  styleUrls: ['./section2-ass2.component.css'],
})
export class Section2Ass2Component implements OnInit {
  userName: string = '';
  userNameFinal: string = 'No username entered';
  constructor() {}

  ngOnInit(): void {}

  checkIfEmpty(): boolean {
    if (this.userName) {
      return false;
    }
    return true;
  }

  onUserNameType() {
    if (this.userName) {
      this.userNameFinal = 'Username is  ' + this.userName;
    }
  }
  onReset() {
    this.userNameFinal = 'No username entered';
    this.userName = '';
  }
}
