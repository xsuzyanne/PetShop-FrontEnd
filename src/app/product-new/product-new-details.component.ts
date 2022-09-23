import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-new-details',
  templateUrl: './product-new-details.component.html',
  styleUrls: ['./product-new-details.component.css']
})
export class ProductNewDetailsComponent implements OnInit {

  productCreate = {}

  createProductForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    price: new FormControl(0, [Validators.required]),
    description: new FormControl('', [Validators.required]),
    url_image: new FormControl('', [Validators.required]),
  });


  constructor(
    private productService: ProductService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  onSucessCreate(){
    this.router.navigate(['']);
  }


  onCreate(){
      this.productCreate = {
      id: 0,
      ...this.createProductForm.value
      }
    this.productService.create(this.productCreate).subscribe({
      next: () => { this.onSucessCreate() },
      error: (res) => { console.log(res)}
    })

  }

}
