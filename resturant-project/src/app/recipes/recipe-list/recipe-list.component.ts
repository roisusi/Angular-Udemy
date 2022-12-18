import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../shared/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Lock',
      'Mocka',
      'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpublic-assets.meredithcorp.io%2F32df9b5cbadfd413b9f319ab314dd2cc%2F1653526004image.jpg&w=595&h=398&c=sc&poi=face&q=60'
    ),
  ];
  @Output() singleRecipe = new EventEmitter<Recipe>();

  constructor() {}

  onNewRecipe() {
    return this.recipes.push(
      new Recipe(
        'Test',
        'This is a test recipe',
        'https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpublic-assets.meredithcorp.io%2F32df9b5cbadfd413b9f319ab314dd2cc%2F1653526004image.jpg&w=595&h=398&c=sc&poi=face&q=60'
      )
    );
  }
  ngOnInit(): void {}

  onRecipeClicked(recipeChose: Recipe) {
    this.singleRecipe.emit(recipeChose);
  }
}
