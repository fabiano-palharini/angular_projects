import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from 'src/app/recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {
  // @Output() recipeWasSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();
  recipes: Recipe[];
  recipesSubscription: Subscription;
  // recipes: Recipe[] = [
  //   new Recipe('Ribs','This is a test','https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
  //   new Recipe('Churrasco','This is a test','https://www.grillsportverein.de/grillrezepte/cache/recipe/354x280/3597.png?1507503470')
  // ];

  constructor(private recipeService: RecipeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.recipesSubscription = this.recipeService.recipesChanged.subscribe(
                                  (recipes: Recipe[]) => {
                                    this.recipes = recipes;
                                  }
                                );
    this.recipes = this.recipeService.getRecipes();
  }

  ngOnDestroy(): void {
    this.recipesSubscription.unsubscribe();
  }

  // onRecipeSelected(recipe: Recipe) {
  //   console.log('onRecipeSelected');
  //   // this.recipeWasSelected.emit(recipe);
  // }

  onNewRecipe() {
    this.router.navigate(['new'], {relativeTo: this.route});
  }
}
