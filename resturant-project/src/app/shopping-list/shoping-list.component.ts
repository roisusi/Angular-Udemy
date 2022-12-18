import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../recipes/shared/ingredients.model';

@Component({
  selector: 'app-shoping-list',
  templateUrl: './shoping-list.component.html',
  styleUrls: ['./shoping-list.component.css'],
})
export class ShopingListComponent implements OnInit {
  ingredients: Ingredients[] = [
    new Ingredients('Apple', 5),
    new Ingredients('Tomatoes', 10),
  ];
  ingredientName: string;
  ingredientsAmount: number;
  constructor() {}

  ngOnInit(): void {}

  onAddIngredientsAdded(addIngredientEvent: Ingredients) {
    this.ingredients.push(addIngredientEvent);
  }
}
