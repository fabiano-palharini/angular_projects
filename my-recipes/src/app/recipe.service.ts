import { Recipe } from './recipes/recipe-list/recipe.model';
import { Injectable } from '@angular/core';
import { Ingredient } from './shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();


  private recipes: Recipe[] = [
    new Recipe('Ribs',
               'This is a recipe about ribs',
               'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg',
               [
                 new Ingredient('ribs', 1),
                 new Ingredient('salt', 2),
                 new Ingredient('pepper', 1),
                 new Ingredient('garlic', 1),
               ]),
    new Recipe('Churrasco',
               'This is a recipe about brazilian BBQ',
               'https://www.grillsportverein.de/grillrezepte/cache/recipe/354x280/3597.png?1507503470',
               [
                 new Ingredient('meat', 10),
                 new Ingredient('marine salt', 1),
               ])
  ];

  constructor(private shoppingListService: ShoppingListService) { }

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) : Recipe {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
