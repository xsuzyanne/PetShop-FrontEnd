import { ProductService } from './../services/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

import { Product } from '../products';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('O seu produto foi adicionado ao carrinho!');
  }

  product: Product | undefined;

  //public products: Product[] = [];

  constructor(
    private route: ActivatedRoute,
    private cartService: CartService,
    private productService: ProductService,
    private router: Router
    ) { }


  ngOnInit(): void {

  // First get the product id from the current route.
  const routeParams = this.route.snapshot.paramMap;
  const productIdFromRoute = Number(routeParams.get('productId'));
  this.getById(productIdFromRoute);

  // Find the product that correspond with the id provided in route.
  //this.product = products.find(product => product.id === productIdFromRoute);

  }

  getById(id: any){
    this.productService.getById(id).subscribe( res => {this.product = res});
  }

  back(){
    this.router.navigate(['']);
  }

}
