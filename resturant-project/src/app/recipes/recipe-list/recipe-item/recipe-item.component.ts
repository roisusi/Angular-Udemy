import { Component, EventEmitter, OnInit, Output, Input } from '@angular/core';
import { Recipe } from '../../shared/recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Output() recipeChose = new EventEmitter<Recipe>();
  constructor() {}

  ngOnInit(): void {}

  onClickedRecipe(recipe) {
    this.recipeChose.emit(recipe);
  }
}
