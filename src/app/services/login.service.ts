import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { CookieService } from '../services/cookie.service';
import { Usuario } from '../usuario';

@Injectable({
    providedIn: 'root',
  })
  export class LoginService {
    url = 'https://localhost:7038/Api/Usuario/login';

    constructor(
        private http: HttpClient,
        public cookie: CookieService,
      ) { }


    public Authenticate(username: any, password: any){
      const headers = new HttpHeaders();
      headers.set('username', username);
        const body = {
            username,
            password
        }
        return this.http.post(this.url, body, {observe: 'response', headers: headers})
    }

    // public getName(id: any){
    //   const userid = this.cookie.getCookie('userid')
    //   return this.http.get<Usuario>(this.url.replace('login',userid)+id)
    //   //return this.http.get(this.url.replace('login',userid))
    // }
    public getName(){
      return this.cookie.getCookie('name');
    }

    public getTipo(){
      return this.cookie.getCookie('tipo');
      // 0 cliente
      // 1 admin
    }
    public getUsername(){
      return this.cookie.getCookie('username');
    }

    public logOff(){
      this.cookie.deleteCookie('id')
      this.cookie.deleteCookie('username')
      this.cookie.deleteCookie('name')
      this.cookie.deleteCookie('tipo')
    }
  }
