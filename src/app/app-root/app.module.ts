import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from "../core/core.module";
import { FormsModule } from "@angular/forms";
import { HomeComponent } from '../feature/home/home.component';
import { LoginModule } from "../feature/login/login.module";
import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  declarations: [
    AppComponent,
//    LoginComponent,
    HomeComponent
  ],
  imports: [
//    angular
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot([]),

//    app
    CoreModule,

//    fetures
    LoginModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule { }
