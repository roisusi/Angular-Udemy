import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Ingredients } from '../../header/shared/ingredients.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  @Output() ingredient = new EventEmitter<Ingredients>();

  constructor() {}

  ngOnInit(): void {}

  onAddItem(nameEvent, amountEvent) {
    const nameInput = nameEvent.value;
    const amountInput = amountEvent.value;
    this.ingredient.emit(new Ingredients(nameInput, amountInput));
  }
}
