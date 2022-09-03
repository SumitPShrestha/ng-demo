import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {AuthModule} from "./auth/auth.module";
import {HomeComponent} from "./home/home.component";

const routes: Routes = [
  { path: 'auth', loadChildren: () => import('../app/auth/auth.module')
      .then(m => m.AuthModule),},
  { path: 'home', component:HomeComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }
