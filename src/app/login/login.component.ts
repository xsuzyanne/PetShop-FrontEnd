import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { LoginService } from '../services/login.service';
import { CookieService } from '../services/cookie.service';

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
    public cookie: CookieService
    ) { }

  ngOnInit(): void {  }

  onSucessLogin(user: any){
    console.log(">>>> usuário autenticado com sucesso")
    this.cookie.setCookie({
      name: 'username',
      value: user,
      session: true,
    });
    this.cookie.setCookie({
      name: 'tipo',
      value: user,
      session: true,
    });
  }
  onErrorLogin(message: any){
    this.message = message;
  }

  onLogin(){
    const username: string = this.loginForm.value.username || "";
    const password: string = this.loginForm.value.password || "";
    this.loginService.Authenticate(username, password).subscribe((res) => {
      this.onSucessLogin(username)
    },(res) => {
      this.onErrorLogin(res.error.message)
    })
  }

}
