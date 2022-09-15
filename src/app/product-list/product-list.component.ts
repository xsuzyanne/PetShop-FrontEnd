import { ProductService } from '../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../products';
import { CartService } from '../services/cart.service';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public products: Product[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private breakpointObserver: BreakpointObserver) {
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product);
    window.alert('O seu produto foi adicionado ao carrinho!');
  }

  product: Product | undefined;

  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 },
          { title: 'Card 2', cols: 1, rows: 1 },
          { title: 'Card 3', cols: 1, rows: 1 },
          { title: 'Card 4', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 1, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 1 },
        { title: 'Card 4', cols: 1, rows: 1 }
      ];
    })
  );

  //panelOpenState = false;

  getProducts(): void {
    this.productService.getProducts().subscribe(res => {
      this.products = res
    });
  }

  ngOnInit(): void {
    this.getProducts();
  }

}
