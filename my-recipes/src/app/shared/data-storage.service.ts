import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipes/recipe-list/recipe.model';

@Injectable({providedIn: 'root'}) //instead of doing this here we can also add this to the providers array in the app.module.ts
export class DataStorageService {
  dbUrl = 'https://ng-course-recipe-book-3d4f2-default-rtdb.firebaseio.com/recipes.json';

  constructor(private http: HttpClient, private recipeService: RecipeService){ }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put(this.dbUrl, recipes).subscribe(
      response => {
        console.log(response);
      }
    );
  }

  fetchRecipes() {
    this.http.get<Recipe[]>(this.dbUrl).subscribe(
      response => {
        this.recipeService.setRecipes(response);
      }
    );
  }
}
