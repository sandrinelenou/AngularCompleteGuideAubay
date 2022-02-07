import { Component, OnInit } from '@angular/core';
//import * as $ from 'jquery';
import { ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../product.service';
import { ProductsComponent } from '../products.component';
import { Product} from '../products.model';

//declare var $ : any;
@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

productDetail!: Product; //product: Product[] = [];
  id!: number;

  constructor(private productService: ProductService,
              private route: ActivatedRoute) { }

  ngOnInit(): void {
    /*$('button').click(function(){
      alert('hi');
    })*/
  //const id = this.route.snapshot.params['id'];
  this.route.params.subscribe(
    (params: Params) =>{
      this.id = +params['id'];  // cast to number by adding + from
      this.productDetail = this.productService.getProduct(this.id);
    }
  );
  }

}


