import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ShopComponent } from './pages/shop/shop.component';
import { LoginRegisterComponent } from './pages/login-register/login-register.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },            
  { path: 'profile', component: ProfileComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login-register', component:LoginRegisterComponent},
  { path: '**', redirectTo: '' }               
];