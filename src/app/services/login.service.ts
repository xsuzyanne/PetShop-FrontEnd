import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
  })
  export class LoginService {
    url = 'https://localhost:7038/Api/Usuario/login';

    constructor(
        private http: HttpClient
      ) { }


    public Authenticate(username: any, password: any){
        const body = {
            username,
            password
        }
        return this.http.post(this.url, body, {observe: 'response'})
    }
  }
