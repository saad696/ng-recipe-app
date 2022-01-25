import { Component, OnInit } from '@angular/core';
import { ShoppingList } from 'src/app/services/shopping-list.service';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.css'],
})
export class ShoppingListEditComponent implements OnInit {
  name: string;
  amount: string;

  constructor(private shoppingListService: ShoppingList) {}

  ngOnInit(): void {}

  addItem() {
    this.shoppingListService.addIngredients(this.name, this.amount);
    this.name = '';
    this.amount = '';
  }
}
