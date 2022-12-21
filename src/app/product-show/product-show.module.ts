import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductShowComponent } from './product-show.component';
import {RouterModule, Routes} from "@angular/router";
import { HomeComponent } from './page/home/home.component';
import { CartComponent } from './page/cart/cart.component';
import { LoginComponent } from './page/login/login.component';
import { RegisterComponent } from './page/register/register.component';
import {ReactiveFormsModule} from "@angular/forms";

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'cart',
    component: CartComponent
  }
]

@NgModule({
  declarations: [
    ProductShowComponent,
    HomeComponent,
    CartComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
  ]
})
export class ProductShowModule { }
