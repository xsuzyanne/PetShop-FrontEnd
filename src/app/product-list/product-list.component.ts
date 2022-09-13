import { ProductService } from '../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public products: Product[] = [];

  constructor(private productService: ProductService) {      
  }

  getProducts(): void {
    this.productService.getProducts().subscribe(res => {
      this.products = res
    });
  }

  ngOnInit(): void {
    this.getProducts();    
  }

}
