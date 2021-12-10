import { Component, EventEmitter, Output } from "@angular/core";
import { Recipe } from "../recipes/recipes.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})

export class HeaderComponent{
 @Output() recipeSelected = new EventEmitter<string>();  // send data from child to parent

  onSelect(recipeData: string){
   this. recipeSelected.emit(recipeData);
  }

}
