import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'yummy', 'https://images.britcdn.com/wp-content/uploads/2017/06/greek-salad-pizza-finished-5.jpg?w=1000&auto=format'),
    new Recipe('Another Test Recipe', 'superb', 'https://images.britcdn.com/wp-content/uploads/2017/12/Cedar-Plank-Salmon-2.jpg?w=1000&auto=format')
  ];

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
   this.recipeWasSelected.emit(recipe);
  }

}
