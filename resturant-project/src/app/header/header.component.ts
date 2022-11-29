import { Component, Output, EventEmitter } from '@angular/core';

@Component({ selector: 'app-header', templateUrl: './header.component.html' })
export class HeaderComponent {
  @Output() onMenuToggle = new EventEmitter<string>();
  onSelected(selected) {
    this.onMenuToggle.emit(selected);
  }
}
