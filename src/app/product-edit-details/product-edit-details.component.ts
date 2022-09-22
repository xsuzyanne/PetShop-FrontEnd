import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { ActivatedRoute } from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';


import { Product } from '../products';


@Component({
  selector: 'app-product-edit-details',
  templateUrl: './product-edit-details.component.html',
  styleUrls: ['./product-edit-details.component.css']
})
export class ProductEditDetailsComponent implements OnInit {

  product: Product | undefined;

  updateProductForm = new FormGroup({    
    name: new FormControl('', [Validators.required]),
    price: new FormControl(0, [Validators.required]),
    description: new FormControl('', [Validators.required]),
    url_image: new FormControl('', [Validators.required]),
  });


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
