import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../../product.service';
import { Product } from '../../products.model';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
@Input() product!: Product;  //product: Product[] = [];
@Input() index!: number;

  constructor(private productService : ProductService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {

  }


}
