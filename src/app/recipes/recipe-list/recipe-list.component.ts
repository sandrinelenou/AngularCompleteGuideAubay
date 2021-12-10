import { Component, EventEmitter, OnInit, Output } from '@angular/core';

import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeListEvent = new EventEmitter<Recipe>();

  recipes : Recipe[] = [
    new Recipe('pasta con ragu', 'description test', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg'),
    new Recipe('pollo con verdure', 'description test2', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg'),

  ];

  constructor() { }

  ngOnInit(): void {
  }

 onRecipeItemSelected(recipe:Recipe){
    console.log('evento emette dal componente lista per mandare dati recipe list a dati item');
    this.recipeListEvent.emit(recipe);
  }



}
