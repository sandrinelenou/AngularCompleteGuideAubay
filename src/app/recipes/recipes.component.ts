import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from './recipes.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
 recipe! : Recipe;
  constructor() { }

  ngOnInit(): void {
  }

  selectedRecipe(recipeL:Recipe){
    console.log('write detail');
    this.recipe = recipeL;
  }

}
