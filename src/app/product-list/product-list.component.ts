import { LoginService } from './../services/login.service';
import { ProductService } from '../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Product } from '../products';
import { CartService } from '../services/cart.service';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { map } from 'rxjs/operators';
import {MatSnackBar} from '@angular/material/snack-bar';
import { BreakPoint } from '@angular/flex-layout';
import { from } from 'rxjs';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  admin = false;

  public products: Product[] = [];

  constructor(
    private productService: ProductService,
    private cartService: CartService,
    private breakpointObserver: BreakpointObserver,
    private loginService: LoginService,
    private _snackBar: MatSnackBar) {
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
          { title: 'product 1', cols: 3, rows: 1 },
          { title: 'Card 2', cols: 2, rows: 2 },
          { title: 'Card 3', cols: 2, rows: 2 },
          { title: 'Card 4', cols: 2, rows: 2 },
          { title: 'Card 5', cols: 2, rows: 2 }

        ];
      }

      return [
        { title: 'Card 1', cols: 1, rows: 1 },
        { title: 'Card 2', cols: 1, rows: 1 },
        { title: 'Card 3', cols: 1, rows: 1 },
        { title: 'Card 4', cols: 1, rows: 1 },
        { title: 'Card 5', cols: 1, rows: 2 }
      ];
    })
  );

  //panelOpenState = false;

  getProducts(): void {
    this.productService.getProducts().subscribe(res => {
      this.products = res
    });
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  deleteProduct(id: any){  
    this.productService.delete(id).subscribe({
      next: () => {
        this.ngOnInit();
        this._snackBar.open('Removido com sucesso', 'Ok', {duration: 3000})        
      },
      error: () => this._snackBar.open('Erro ao remover produto', 'Ok'),
    })
  }

  ngOnInit(): void {
    this.getProducts();
    if(this.loginService.getTipo() == '1'){
       this.admin = true
    } else {
      this.admin = false
    }

  }
}

