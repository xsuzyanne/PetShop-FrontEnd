import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { LoginService } from '../services/login.service';
import { CookieService } from '../services/cookie.service';
import { Router } from '@angular/router';
import { NavigationToolbarComponent } from '../navigation-toolbar/navigation-toolbar.component';


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
    private nav : NavigationToolbarComponent
    ) { }

  ngOnInit(): void {  }

  onSucessLogin(user: any){
    console.log(">>>> usuário autenticado com sucesso")
    console.log(user)    
    this.cookie.setCookie({
      name: 'userid',
      value: user.id,
      session: true,
    });
    this.router.navigate(['']).then( () => {
      this.nav.ngOnInit();
    });
    
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
