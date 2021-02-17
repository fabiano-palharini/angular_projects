import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  // ingredients: Ingredient[] = [
  //   new Ingredient('apples', 5),
  //   new Ingredient('tomatoes', 10)
  // ];
  ingredients: Ingredient[];
  ingredientAddedSubscription: Subscription;

  constructor(private shoppingListService: ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
    this.ingredientAddedSubscription = this.shoppingListService.ingredientAdded.subscribe(
                                          (ingredients: Ingredient[]) => this.ingredients = ingredients
                                        );
  }

  ngOnDestroy() {
    this.ingredientAddedSubscription.unsubscribe();
  }

  onIngredientAdded(ingredient: Ingredient) {
    // this.ingredients.push(ingredient);
    this.shoppingListService.addIngredient(ingredient);
  }

}
