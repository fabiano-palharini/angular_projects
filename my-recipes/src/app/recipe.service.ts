import { Recipe } from './recipes/recipe-list/recipe.model';
import { EventEmitter } from '@angular/core';

export class RecipeService {
  selectedRecipe = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe('Ribs','This is a test','https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
    new Recipe('Churrasco','This is a test','https://www.grillsportverein.de/grillrezepte/cache/recipe/354x280/3597.png?1507503470')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
