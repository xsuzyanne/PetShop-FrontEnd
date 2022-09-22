import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from '@angular/cdk/layout';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatListModule } from '@angular/material/list';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material/paginator'
import { GridListComponent } from './grid-list/grid-list.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatMenuModule } from '@angular/material/menu';
import { MatStepperModule } from '@angular/material/stepper'
import { MatSliderModule } from '@angular/material/slider';
import { MatExpansionModule } from '@angular/material/expansion';
import { HttpClientModule } from '@angular/common/http';
import { MatChipsModule } from '@angular/material/chips';
import { MatTabsModule } from '@angular/material/tabs'





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavigationToolbarComponent } from './navigation-toolbar/navigation-toolbar.component';
import { ShipAddressComponent } from './ship-address/ship-address.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { LoginComponent } from './login/login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { CartComponent } from './cart/cart.component';

import { ProductService } from './services/product.service';
import { CookieService } from './services/cookie.service';
import { LoginService } from './services/login.service';

import { InterceptorModule } from './interceptors/interceptor.module';
import { ProductEditDetailsComponent } from './product-edit-details/product-edit-details.component';
import { EditUsersComponent } from './edit-users/edit-users.component';
import { MatSnackBarModule } from '@angular/material/snack-bar';

@NgModule({
  declarations: [
    AppComponent,
    NavigationToolbarComponent,
    ShipAddressComponent,
    GridListComponent,
    ProductListComponent,
    ProductDetailsComponent,
    LoginComponent,
    UserRegistrationComponent,
    CartComponent,
    ProductEditDetailsComponent,
    EditUsersComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    InterceptorModule,
    RouterModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    ReactiveFormsModule,
    MatPaginatorModule,
    MatGridListModule,
    MatMenuModule,
    MatStepperModule,
    MatSliderModule,
    MatExpansionModule,
    MatChipsModule,
    MatTabsModule,
    MatSnackBarModule
  ],
  providers: [ProductService, CookieService, LoginService],
  bootstrap: [AppComponent]
})
export class AppModule { }
