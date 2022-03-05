import { ShoppingListService } from './../shopping-list/shopping-list.service';
import { EventEmitter, Injectable, Output } from "@angular/core";
import { Ingredient } from "../shared/ingredient.module";
import { Recipe } from "./recipes.model";

@Injectable()
export class RecipeService{
//// manda una communicazione dal figlio al padre, manda un valore all'externo al padre, la proprieta recipeSelected permette di salvare il nostro dati recipes da mandare fuori, questo conserverà alcuni dati di ricetta
// @Output() recipeSelected = new EventEmitter<Recipe>(); //è un evento
 recipeSelected = new EventEmitter<Recipe>(); //è un evento

//non puo accedere direttamente a questo dall'esterno
 private  recipes : Recipe[] = [
    new Recipe(
      'pasta con ragu',
      'description test',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg',
      [
         new Ingredient('meat', 1),
         new Ingredient('French fish', 20),
        ]),
    new Recipe(
      'pollo con verdure',
      'description test2',
      'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg',
      [
        new Ingredient('Yaourt', 1),
        new Ingredient('English fish', 20),
       ])

  ];

  constructor(private shoppingListService: ShoppingListService){}

  getRecipes(){
    return this.recipes.slice(); //slice restituisce una copia dell' array recipes
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    //this.shoppingListService.addIngredients(ingredients);
  }

}
