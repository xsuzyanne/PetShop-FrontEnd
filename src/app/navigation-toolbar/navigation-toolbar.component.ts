import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { ProductListComponent } from '../product-list/product-list.component';


@Component({
  selector: 'app-navigation-toolbar',
  templateUrl: './navigation-toolbar.component.html',
  styleUrls: ['./navigation-toolbar.component.css']
})
export class NavigationToolbarComponent implements OnInit {
  
  usuarioName = '';

  ngOnInit(): void {
    this.usuarioName = this.loginService.getName();
   }

   logOff(){
    this.loginService.logOff();
    this.router.navigate(['']).then( () => this.home.ngOnInit());
    this.ngOnInit();    
   }
  

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    public loginService: LoginService,
    private router: Router,
    private home: ProductListComponent 
    ) {}

}
