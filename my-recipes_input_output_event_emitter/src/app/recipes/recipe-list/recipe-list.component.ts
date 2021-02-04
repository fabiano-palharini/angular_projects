import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected: EventEmitter<Recipe> = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('Ribs','This is a test','https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_960_720.jpg'),
    new Recipe('Churrasco','This is a test','https://www.grillsportverein.de/grillrezepte/cache/recipe/354x280/3597.png?1507503470')
  ];

  constructor() { }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe) {
    console.log('onRecipeSelected');
    this.recipeWasSelected.emit(recipe);
  }
}
