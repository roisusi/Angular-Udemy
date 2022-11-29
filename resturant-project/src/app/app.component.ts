import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  menuSelected: string = '';
  constructor() {}
  toggleDisplay(selected: string) {
    this.menuSelected = selected;
  }
}
