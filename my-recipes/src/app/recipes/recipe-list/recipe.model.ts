import { Ingredient } from 'src/app/shared/ingredient.model';

export class Recipe {
  name: string;
  desc: string;
  imagePath: string;
  ingredients: Ingredient[];

  constructor(name: string, desc: string, imagePath: string, ingredients: Ingredient[]) {
    this.name = name;
    this.desc = desc;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }


}
