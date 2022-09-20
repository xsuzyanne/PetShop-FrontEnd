import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Product} from '../products';

@Injectable({
  providedIn: 'root',
})
export class ProductService {

    url = 'https://localhost:7038';

  constructor(
    private http: HttpClient
  ) { }

  public getProducts(): Observable<Product[]>{     
    return this.http.get<Product[]>(this.url+'/api/Products')
  }

  public getById(id: any): Observable<Product>{
    return this.http.get<Product>(this.url+'/api/Products/'+id)
  }

  public create(product: Product){
    return this.http.post<Product>(this.url+'/api/Products', product)
  }

  public update(product: Product){
    return this.http.put(this.url+'/api/Products'+product.id, product)
  }

  public delete(id: any){
    return this.http.delete(this.url+'/api/Products'+id)
  }


}

