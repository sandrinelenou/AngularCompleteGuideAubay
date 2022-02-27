import { Component,OnInit } from '@angular/core';
import { RecipeService } from './recipe.service';
import { Recipe } from './recipes.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers:[RecipeService]
})
export class RecipesComponent implements OnInit {

  selectedRecipe! : Recipe;
  // recipes!: Recipe;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    //emit recipeSelected event from service
    this.recipeService.recipeSelected
    .subscribe(
      (recipe: Recipe) =>{
        this.selectedRecipe = recipe;
      }
    );
  }

  // selectedRecipe(recipeL:Recipe){
  //   console.log('write detail');
  //   this.recipe = recipeL;
  // }


}
