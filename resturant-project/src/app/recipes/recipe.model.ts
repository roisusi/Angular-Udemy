import { Ingredients } from '../shared/ingredients.model';

export class Recipe {
  //Model is a blue print for objects we csreate
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredients[];

  constructor(
    name: string,
    description: string,
    imagePath: string,
    ingredients: Ingredients[]
  ) {
    this.name = name;
    this.description = description;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }
}
