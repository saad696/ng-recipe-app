import { Component, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/model/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent implements OnInit {
  ingredients: Ingredient[] = [
    new Ingredient('moong', '250g'),
    new Ingredient('tomato', '1'),
  ];

  constructor() {}

  ngOnInit(): void {}
}
