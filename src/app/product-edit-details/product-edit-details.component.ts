import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';

import { Product } from '../products';


@Component({
  selector: 'app-product-edit-details',
  templateUrl: './product-edit-details.component.html',
  styleUrls: ['./product-edit-details.component.css']
})
export class ProductEditDetailsComponent implements OnInit {

  product: Product | undefined;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
    ) { }

  ngOnInit(): void {

    // First get the product id from the current route.
  const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = Number(routeParams.get('productId'));
  this.getById(productIdFromRoute);

  }

  getById(id: any){
    this.productService.getById(id).subscribe( res => {this.product = res});
  }

}
