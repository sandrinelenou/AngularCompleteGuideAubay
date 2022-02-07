import { Component, OnInit } from '@angular/core';
import { Product } from './products.model';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  product! : Product;

  constructor() { }

  ngOnInit(): void {
  }

}
