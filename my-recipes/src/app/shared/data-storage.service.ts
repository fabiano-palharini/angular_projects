import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { RecipeService } from '../recipe.service';
import { Recipe } from '../recipes/recipe-list/recipe.model';
import { map, tap, take, exhaustMap } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

@Injectable({providedIn: 'root'}) //instead of doing this here we can also add this to the providers array in the app.module.ts
export class DataStorageService {
  dbUrl = 'https://ng-course-recipe-book-3d4f2-default-rtdb.firebaseio.com/recipes.json';

  constructor(private http: HttpClient, private recipeService: RecipeService, private authService: AuthService){ }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    this.http.put(this.dbUrl, recipes).subscribe(
      response => {
        console.log(response);
      }
    );
  }

  fetchRecipes() {
    return this.http.get<Recipe[]>(this.dbUrl)
      .pipe(
        map(recipes => {
            return recipes.map(recipe => {
              return {...recipe, ingredients: recipe.ingredients ? recipe.ingredients : []};
            });
        }),
        tap(recipes => {
          this.recipeService.setRecipes(recipes);
        })
      );
  }
}
