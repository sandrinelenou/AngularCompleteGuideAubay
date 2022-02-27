import { EventEmitter, Injectable, Output } from "@angular/core";
import { Recipe } from "./recipes.model";

@Injectable({
  providedIn : 'root'
})
export class RecipeService{
//// manda una communicazione dal figlio al padre, manda un valore all'externo al padre, la proprieta recipeSelected permette di salvare il nostro dati recipes da mandare fuori, questo conserverà alcuni dati di ricetta
// @Output() recipeSelected = new EventEmitter<Recipe>(); //è un evento
recipeSelected = new EventEmitter<Recipe>(); //è un evento

//non puo accedere direttamente a questo dall'esterno
 private  recipes : Recipe[] = [
    new Recipe('pasta con ragu', 'description test', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg'),
    new Recipe('pollo con verdure', 'description test2', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg'),

  ];

  getRecipes(){
    return this.recipes.slice(); //slice restituisce una copia del array recipes
  }

}
