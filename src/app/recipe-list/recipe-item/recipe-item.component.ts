import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/recipes/recipes.model';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
@Input() recipeItem!: Recipe;
@Output() recipeSelectedItemdEvent = new EventEmitter<Recipe>();

  constructor() { }


  onSelectedItem(){
    console.log('Evento emesso da recipe item');
    this.recipeSelectedItemdEvent.emit(this.recipeItem);
  }

  ngOnInit(): void {
  }

}
