import { Component, OnInit, Output } from '@angular/core';
import { Ingredients } from '../../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent implements OnInit {
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit(): void {}

  onAddItem(nameEvent, amountEvent) {
    this.shoppingListService.addIngredient(
      new Ingredients(nameEvent.value, amountEvent.value)
    );
  }
}
