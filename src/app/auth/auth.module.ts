import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LoginComponent} from "./login/login.component";
import {AuthRoutingModule} from "./auth-routing.module";
import { AuthComponent } from './auth.component';
import {RouterOutlet} from "@angular/router";



@NgModule({
  declarations: [
    LoginComponent,
    AuthComponent
  ],
    imports: [
        CommonModule,
        AuthRoutingModule,
        RouterOutlet,

    ]
})
export class AuthModule { }
