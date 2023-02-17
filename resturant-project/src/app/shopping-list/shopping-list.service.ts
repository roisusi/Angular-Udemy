import { Injectable } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ShoppingListService {
  private ingredients: Ingredients[] = [
    new Ingredients('Apple', 5),
    new Ingredients('Tomatoes', 10),
  ];
  onUpdateIngredient = new Subject<Ingredients[]>();
  startedEditing = new Subject<number>();
  constructor() {}
  getIngredients(): Ingredients[] {
    return this.ingredients.slice();
  }
  getIngredient(index: number) {
    return this.ingredients[index];
  }
  addIngredient(ingredient: Ingredients) {
    this.ingredients.push(ingredient);
    this.onUpdateIngredient.next(this.ingredients.slice());
  }
  //from the recipe service
  addIngredients(ingredient: Ingredients[]) {
    this.ingredients.push(...ingredient);
    this.onUpdateIngredient.next(this.ingredients.slice());
  }

  updateIngredient(index: number, ingredient: Ingredients) {
    console.log(ingredient);
    this.ingredients[index] = ingredient;
    this.onUpdateIngredient.next(this.ingredients.slice());
  }
  deleteIngredient(index: number) {
    this.ingredients.splice(index, 1);
    this.onUpdateIngredient.next(this.ingredients.slice());
  }
}
