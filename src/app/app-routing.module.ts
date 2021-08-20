import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { PaidComponent } from './paid/paid.component';
import { FreeComponent } from './free/free.component';

import { FormsModule } from '@angular/forms';

const routes: Routes = [
  {path : 'home', component: HomeComponent},
  {path : 'login', component: LoginComponent},
  {path : 'email', component: EmailComponent},
  {path : 'paid', component: PaidComponent},
  {path : 'free', component: FreeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
