import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.module';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
//ingredients = Ingredient[] = [];

  ingredients : Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomatoes', 15)
  ];

  constructor() { }

  ngOnInit(): void {
  }


  reciveEmitEvent(ingredient: Ingredient){
    console.log('Recive emit event dal figlio shopping list');
    this.ingredients.push(ingredient);
  }




}
