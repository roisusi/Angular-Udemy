import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../shared/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipeChose: Recipe;
  constructor() {}

  ngOnInit(): void {
    console.log(this.recipeChose);
  }
}
