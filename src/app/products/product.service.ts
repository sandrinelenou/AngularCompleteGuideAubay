import { Injectable } from '@angular/core';
import { Product } from './products.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products : Product[] = [
    new Product('pasta con ragu', 'description test', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg'),
    new Product('pollo con verdure', 'description test2', 'https://cdn.pixabay.com/photo/2016/06/15/19/09/food-1459693_1280.jpg'),

  ];

  constructor() { }

  getProducts(){
    return this.products.slice(); //return this.products.slice(); renvoie le tableau original ou une copie du tableau sans modifier avec slice()
  }

  getProduct(id: number){
    return this.products.slice()[id];
  }

}
