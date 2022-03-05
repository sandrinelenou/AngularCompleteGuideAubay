import { NgForm } from '@angular/forms';
import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.module";

@Injectable({
  providedIn: 'root'
})
export class ShoppingListService{

  //oppure troviamo altri metodi per mostrare nuovi aggiornamenti con eventEmitter
  ingredientsChanged = new EventEmitter<Ingredient[]>();
  formShopping: NgForm;

  //array di oggetti
  ingredients : Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 15)
  ];

getIngredients(){
  // return this.ingredients; con slice  al momento dell'agguinta non aggiorna l'array perché agguingiamo nella copia dell'array e non dentro larray ecco perche non vediamo nessun cambiamento
    return this.ingredients.slice(); // slice ritorna la copia dell'array

}

addIngredient(ingredient: Ingredient){
  this.ingredients.push(ingredient);
  this.ingredientsChanged.emit(this.ingredients.slice());
}

  // onSubmit(){
  //   const name = this.formShopping.value.name;
  //   const amount = this.formShopping.value.amount;
  //   const ingredients = new Ingredient(name, amount);
  //   this.ingredients.push(ingredients);
  // }



  addIngredients(ingredients: Ingredient){
    for(let ingredient of this.ingredients){
      this.addIngredient(ingredients);
    }

  }

}
