import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.module';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

ingredients: Ingredient[] = [];
//ingredient = new Ingredient(name:string, amount: number);

@ViewChild('inputName', { static: true })
  inputNameRef!: ElementRef;
@ViewChild('inputAmount',{static: true}) inputAmountRef!: ElementRef;
@Output() IngredientAdded = new EventEmitter<{name: string, amount: number}>();
@Input() ingredientEl! : Ingredient[];


  constructor() { }

  ngOnInit(): void {
  }

  onAddIngredient(){
    //console.log(this.inputNameRef)
    const  name = this.inputNameRef.nativeElement.value; // const perche non è una variabile da modificare rispetto a let
    const amount = this.inputAmountRef.nativeElement.value
    const newIngredient = new Ingredient(name , amount);
    this.IngredientAdded.emit(newIngredient);

  }
  /*onAddIngredient(){
    //console.log(this.inputNameRef)
    this.IngredientAdded.emit({
        name: this.inputNameRef.nativeElement.value,
        amount:this.inputAmountRef.nativeElement.value
      });
  }*/


}
