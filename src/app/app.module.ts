import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { FormsModule } from '@angular/forms';
import { EmailComponent } from './email/email.component';
import { PaidComponent } from './paid/paid.component';
import { FreeComponent } from './free/free.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    EmailComponent,
    PaidComponent,
    FreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [
    HomeComponent      
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
