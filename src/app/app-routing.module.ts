import { GridListComponent } from './grid-list/grid-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShipAddressComponent } from './ship-address/ship-address.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { LoginComponent } from './login/login.component';
import { UserRegistrationComponent } from './user-registration/user-registration.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  { path: '', redirectTo: 'products', pathMatch: 'full' },
  { path: 'products', component: ProductListComponent },
  { path: 'products/:productId', component: ProductDetailsComponent },
  { path: 'compartilhar', component: ShipAddressComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cadastro', component: UserRegistrationComponent },
  { path: 'cart', component: CartComponent },
  { path: 'gridlist', component: GridListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
