import { Component, OnInit } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(
    private recipesService: RecipeService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.recipes = this.recipesService.getRecipes();
    this.recipesService.recipesChanged$.subscribe((recipes: Recipe[]) => {
      this.recipes = recipes;
    });
  }
  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route });
  }
}
