import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Injectable } from '@angular/core';
import { DataStorageService } from './shared/data-storage.service';
import { Recipe } from './recipes/recipe-list/recipe.model';
import { RecipeService } from './recipe.service';

@Injectable(
  {providedIn: 'root'}
)
export class RecipesResolverService implements Resolve<Recipe[]> {
  constructor(private dataStorageService: DataStorageService, private recipeService: RecipeService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) { //the resolver will subscribe automatically to find out if the data is there
    const recipes = this.recipeService.getRecipes();
    if (recipes.length === 0) {
      return this.dataStorageService.fetchRecipes();
    } else {
      return recipes;
    }
  }
}
