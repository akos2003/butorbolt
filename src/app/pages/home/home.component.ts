import {Component, Input, Output, EventEmitter} from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule } from '@angular/forms';
import { ReviewComponent } from './model/review/review.component';
import { CommonModule } from '@angular/common';
import { Customer } from '../profile/model/customer-object';
import { AuthService } from '../../shared/services/auth.service';
import { Router, RouterModule } from '@angular/router';
import { PrettyButtonPipe } from "../../pipes/stars.pipe";



@Component({
  selector: 'app-home',
  imports: [
    FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    CommonModule,
    MatDividerModule,
    MatSnackBarModule,
    MatSelectModule,
    ReviewComponent,
    PrettyButtonPipe,
    RouterModule
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  currentUser : Customer | null = null;

  constructor(private authService : AuthService){}
  
  ngOnInit(){
     this.authService.currentUser$.subscribe((user: Customer | null) => {
      this.currentUser = user;
    });
  }
}





