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


}

