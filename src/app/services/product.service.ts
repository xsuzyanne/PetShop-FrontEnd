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


}

// import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

// @Injectable({
//   providedIn: 'root'
// })
// export class ProductService {

//   url = 'http://localhost:5000/';
//   constructor(private http: HttpClient) { }

//  renderProducts = (data: any) => { 
//     return data;   
//   }
//     getProducts(){
//         return this
//             .http
//             .get(this.url+'/api/Products').subscribe(this.renderProducts)
//     }
// }