import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { MenuComponent } from './shared/menu/menu.component';
import { NgIf } from '@angular/common';
import { Customer } from './pages/profile/model/customer-object';
import { DeliveryAddress } from './pages/profile/model/deliveryAddress-object';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HomeComponent,ProfileComponent,MenuComponent,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'butorbolt';
  page = "home";

  changePage(page: string){
    this.page = page;
   }

  currentUserAddress: DeliveryAddress = {
    id: 1,
    street: 'szezam',
    city: 'New York',
    postal: 8228
  };

  currentUser: Customer = {
    id: 1,
    name: 'Béla',
    email: 'pleasemakeitstop@happy.com',
    password: 'almafa123',
    phone: '+36301234567',
    address: this.currentUserAddress
  };

}
