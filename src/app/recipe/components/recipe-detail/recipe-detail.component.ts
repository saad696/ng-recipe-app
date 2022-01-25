import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/model/ingredients.model';
import { Recipe } from 'src/app/model/recipe.model';
import { ShoppingList } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private slService: ShoppingList) {}

  ngOnInit(): void {}

  toShoppingList() {
    this.slService.setIngredients(this.recipe.ingredients);
  }
}
