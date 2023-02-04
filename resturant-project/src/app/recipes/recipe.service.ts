import { Injectable } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(private shoppingListService: ShoppingListService) {}

  private recipes: Recipe[] = [
    new Recipe(
      'Lock',
      'Mocka',
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpublic-assets.meredithcorp.io%2F32df9b5cbadfd413b9f319ab314dd2cc%2F1653526004image.jpg&w=595&h=398&c=sc&poi=face&q=60',
      [new Ingredients('Meat', 10), new Ingredients('Sand', 4)]
    ),
    new Recipe(
      'Lock2',
      'Mocka',
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpublic-assets.meredithcorp.io%2F32df9b5cbadfd413b9f319ab314dd2cc%2F1653526004image.jpg&w=595&h=398&c=sc&poi=face&q=60',
      [new Ingredients('Meat', 10), new Ingredients('Sand', 4)]
    ),
  ];

  getRecipes() {
    return this.recipes.slice(); //good way to get new copy of the array
  }

  addIngredientsToShoppingList(ingredient: Ingredients[]) {
    this.shoppingListService.addIngredients(ingredient);
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }
}
