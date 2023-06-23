import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { InputComponent } from './input/input.component';
import { ButtonComponent } from './button/button.component';

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Routes, RouterModule } from '@angular/router';
import { DetailComponent } from './detail/detail.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AsidebuttonComponent } from './asidebutton/asidebutton.component';
import { ItemcountComponent } from './itemcount/itemcount.component';
import { ShowbuttonComponent } from './showbutton/showbutton.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';

const appRoute: Routes = [
  {
    path: '',
    redirectTo: 'Login',
    pathMatch: 'full',
  },
  { path: 'Login', component: LoginComponent },
  { path: 'Register', component: RegisterComponent },
  { path: 'Dashboard', component: DashboardComponent },
  {path:'Checkout',component:CheckoutComponent},
  {path:'Cart',component:CartComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    InputComponent,
    ButtonComponent,
    LoginComponent,
    RegisterComponent,
    DetailComponent,
    DashboardComponent,
    AsidebuttonComponent,
    ItemcountComponent,
    ShowbuttonComponent,
    CheckoutComponent,
    CartComponent,
    
  ],
  imports: [BrowserModule, FormsModule, RouterModule.forRoot(appRoute)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
