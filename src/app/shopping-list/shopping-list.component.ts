import { ShoppingListService } from './shopping-list.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Ingredient } from '../shared/ingredient.module';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
//ingredients = Ingredient[] = [];
  //ingredients = Ingredient[] = [];
  formShopping!: NgForm;
  ingredients! : Ingredient[] ;

  constructor(private shoppingListService : ShoppingListService) { }

  ngOnInit(): void {
    this.ingredients = this.shoppingListService.getIngredients();
        //devo suscrire al evento per aggiornare il mio array delle nuove modifiche aggiunte  perche ho usato ingredients.slice()
        this.shoppingListService.ingredientsChanged
        .subscribe(
          (ingredients: Ingredient[]) => {
            this.ingredients = ingredients;
          }
        );
  }


  onIngredientAdded(ingredient: Ingredient){
    console.log('{Recive emit event dal figlio shopping list');
    this.ingredients.push(ingredient);
  }

}
