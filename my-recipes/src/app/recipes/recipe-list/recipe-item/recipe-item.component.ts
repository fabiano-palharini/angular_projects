import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from 'src/app/recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;
  @Input() index: number;
  // @Output() recipeSelected = new EventEmitter<void>();

  constructor(private recipeService: RecipeService) { }

  ngOnInit(): void {
  }

  onSelected() {
    console.log('recipe clicked');
    this.recipeService.selectedRecipe.emit(this.recipe);
  }

}
