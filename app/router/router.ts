import { provideRouter, RouterConfig } from '@angular/router';
import { Injectable } from '@angular/core';

import { HomeComponent } from '../component/home/home.component';
import { PartnersComponent } from '../component/partners/partners.component';
import { RegisterComponent } from '../component/register/register.component';
import { LoginComponent } from '../component/login/login.component';


export const routes: RouterConfig = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'partners', component: PartnersComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent }
];

export const APP_ROUTER_PROVIDERS = [
  provideRouter(routes)
];

