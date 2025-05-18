import {Component, Input, Output, EventEmitter} from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatGridList } from '@angular/material/grid-list';
import { Customer } from './model/customer-object';
import { DeliveryAddress } from './model/deliveryAddress-object';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatGridTile } from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { CommonModule } from '@angular/common';
import { NgForOf } from '@angular/common';


@Component({
  selector: 'app-profile',
  imports: [
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatGridList,
    MatGridTile,
    MatDividerModule,
    MatSnackBarModule,
    NgForOf,
    CommonModule,
    MatSelectModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  @Input() user!: Customer;

  @Output() newAddress = new EventEmitter<DeliveryAddress>();
  @Output() updateCustomer = new EventEmitter<Customer>();

  constructor(private snackBar: MatSnackBar) {

  }

  wishlist = [
    {
      name: 'Modern Velvet Armchair',
      description: 'A luxurious velvet chair perfect for cozy corners.',
      image: 'images/chair1.jpg'
    },
    {
      name: 'Minimalist Wooden Table',
      description: 'Stylish and sleek design, fits any space.',
      image: 'images/table1.jpg'
    },
    {
      name: 'Ergonomic Office Chair',
      description: 'Supports posture and comfort during long work hours.',
      image: 'images/chair2.jfif'
    }
  ];

  saveAddress() {
    this.newAddress.emit(this.deliveryAddress);
    this.snackBar.open('Address saved!', 'Close', { duration: 2000 });
  }

  deliveryAddress: DeliveryAddress = {
    id: 0,
    street: '',
    city: '',
    postal: 0
  };
}
