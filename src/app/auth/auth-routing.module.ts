import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HttpClientModule} from '@angular/common/http';


import {LoginComponent} from "./login/login.component";
import {AuthComponent} from "./auth.component";
import {NavbarService} from "../components/navbar/navbar.service";
import {AuthService} from "./auth.service";

const authRoutes: Routes = [
  {
    path: '',
    component: AuthComponent,
  }, {
    path: 'login',
    component: LoginComponent,
  }, {path: '', redirectTo: 'login', pathMatch: 'full'},
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(authRoutes)

  ],
  providers: [NavbarService, AuthService]
})
export class AuthRoutingModule {
}
