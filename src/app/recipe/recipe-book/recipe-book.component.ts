import { Component, OnInit } from '@angular/core';
import { Recipe } from 'src/app/model/recipe.model';

@Component({
  selector: 'app-recipe-book',
  templateUrl: './recipe-book.component.html',
  styleUrls: ['./recipe-book.component.css']
})
export class RecipeBookComponent implements OnInit {

  recipe: Recipe;

  constructor() { }

  ngOnInit(): void {
  }

  getRecipe(recipeData: Recipe){
    this.recipe = recipeData
  }

}
