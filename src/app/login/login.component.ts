import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { LoginService } from '../services/login.service';
import { CookieService } from '../services/cookie.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  message = "";

  loginForm = new FormGroup({
    username: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required]),
  });


  hide = true;

  constructor(
    private loginService: LoginService,
    public cookie: CookieService,
    private router: Router,
    // private nav : NavigationToolbarComponent
    ) { }

  ngOnInit(): void {  }

  onSucessLogin(user: any){ 
    this.cookie.setCookie({
      name: 'id',
      value: user.id,
      session: true,
    });
    this.cookie.setCookie({
      name: 'username',
      value: user.username,
      session: true,
    });
    this.cookie.setCookie({
      name: 'name',
      value: user.name,
      session: true,
    });
    this.cookie.setCookie({
      name: 'tipo',
      value: user.tipo,
      session: true,
    });
    this.router.navigate(['']);
    
  }
  onErrorLogin(message: any){
    console.log(message);
    this.message = message;
    
  }

  onLogin(){
    const username: string = this.loginForm.value.username || "";
    const password: string = this.loginForm.value.password || "";
    this.loginService.Authenticate(username, password).subscribe((res) => {
      this.onSucessLogin(res.body)
    },(res) => {
      this.onErrorLogin(res.error.message)
    })
  }

}
