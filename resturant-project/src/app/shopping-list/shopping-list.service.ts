import { EventEmitter, Injectable } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  private ingredients: Ingredients[] = [
    new Ingredients('Apple', 5),
    new Ingredients('Tomatoes', 10),
  ];

  constructor() {}

  onUpdateIngredient = new EventEmitter<Ingredients[]>();

  getIngredients(): Ingredients[] {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredients) {
    this.ingredients.push(ingredient);
    this.onUpdateIngredient.emit(this.ingredients.slice());
  }
  addIngredients(ingredient: Ingredients[]) {
    this.ingredients.push(...ingredient);
    this.onUpdateIngredient.emit(this.ingredients.slice());
  }
}
