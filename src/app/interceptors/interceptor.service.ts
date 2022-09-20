import { Injectable } from '@angular/core';
import { 
    HttpEvent,
    HttpInterceptor,
    HttpHandler,
    HttpRequest }
  from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable()

export class Interceptor implements HttpInterceptor {
    constructor(private loginService: LoginService){}
 intercept( request: HttpRequest<any>, next: HttpHandler):
 Observable<HttpEvent<any>> {
        if (this.loginService.getUsername()){
            request = request.clone({            
                setHeaders: {
                    username: this.loginService.getUsername(),
                    tipo: this.loginService.getTipo() || '0'
                }
            })
        }        
    return next.handle(request);
    }
}