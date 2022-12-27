import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent implements OnInit {
  recipeChose;
  constructor(private recepiesService: RecipeService) {}

  ngOnInit(): void {
    this.recepiesService.recipeSelected.subscribe(
      (recepie: Recipe) => (this.recipeChose = recepie)
    );
  }
}
