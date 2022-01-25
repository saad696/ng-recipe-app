import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/model/ingredients.model';
import { ShoppingList } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[];
  constructor(private shoppinListService: ShoppingList) {}

  ngOnInit(): void {
    this.ingredients = this.shoppinListService.getIngredients();
    this.shoppinListService.ingrediantsChanges.subscribe(
      (ingredients: Ingredient[]) => {
        this.ingredients = ingredients;
      }
    );
  }
}
