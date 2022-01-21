import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/model/recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Daal Fry',
      'Dal fry is made by soft cooking toor dal (split pigeon peas) in a pressure cooker or pot',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNMS0-bzaCTouwqeEwweZ7pio1qb9f7U5-zg&usqp=CAU'
    ),
  ];

  constructor() {}

  ngOnInit(): void {}
}
