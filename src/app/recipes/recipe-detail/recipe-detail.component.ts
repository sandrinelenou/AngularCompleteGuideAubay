import { Component, Input, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {
//@Input() detail!  : Recipe;
@Input() recipeDetail!  : {name: string, description: string, imagePath: string };
  constructor() { }

  ngOnInit(): void {
  }


}
