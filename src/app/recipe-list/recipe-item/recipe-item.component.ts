import { RecipeService } from './../../recipes/recipe.service';
import { Component, Input, OnInit, Output } from '@angular/core';
import { Recipe } from 'src/app/recipes/recipes.model';


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {

@Input() recipeItem!: Recipe;
// manda una communicazione dal figlio al padre, manda un valore all'externo al padre, la proprieta recipeSelectedItemdEvent permette di salvare il nostro dati da mandare fuori
//  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor(private recipeService: RecipeService) { }

  ngOnInit(){
  }

  onSelected(){
    console.log('Evento emesso da recipe item al padre recipe list'  );
    // this.recipeSelected.emit(this.recipeItem);
    this.recipeService.recipeSelected.emit(this.recipeItem);
  }



}
