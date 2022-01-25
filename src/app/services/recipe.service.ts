import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../model/ingredients.model';
import { Recipe } from '../model/recipe.model';

@Injectable({ providedIn: 'root' })
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      'Daal Fry',
      'Dal fry is made by soft cooking toor dal (split pigeon peas) in a pressure cooker or pot',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNMS0-bzaCTouwqeEwweZ7pio1qb9f7U5-zg&usqp=CAU',
      [
          new Ingredient('Masoor', '250g'),
          new Ingredient('tomatoes', '100g'),
          new Ingredient('jeera', '1tbsp'),
      ]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
