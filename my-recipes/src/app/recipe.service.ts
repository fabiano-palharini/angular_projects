import { Recipe } from './recipes/recipe-list/recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from './shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Injectable()
export class RecipeService {
  selectedRecipe = new EventEmitter<Recipe>();

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

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
