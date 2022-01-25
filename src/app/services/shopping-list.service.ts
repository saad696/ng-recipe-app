import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../model/ingredients.model';

@Injectable({ providedIn: 'root' })
export class ShoppingList {
  ingrediantsChanges = new EventEmitter<Ingredient[]>();
  onIngredientsSet = new EventEmitter<boolean>()

  private ingredients: Ingredient[];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredients(name: string, amount: string) {
    this.ingredients.push(new Ingredient(name, amount));
    this.ingrediantsChanges.emit(this.ingredients.slice());
  }

  setIngredients(ingredients: Ingredient[]){
      this.ingredients = ingredients;
      this.onIngredientsSet.emit(true)
  }
}
