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
import { MatGridList } from '@angular/material/grid-list';
import { MatGridTile } from '@angular/material/grid-list';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-review',
  imports: [FormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatGridList,
    MatGridTile,
    MatSelectModule,
    MatDividerModule,
    MatSnackBarModule,
    MatSelectModule],
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css'] 
})
export class ReviewComponent {
  review = {
    name: '',
    comment: '',
    rating: null
  };

  submitReview() {
    if (this.review.name && this.review.comment && this.review.rating) {
      console.log('Review submitted:', this.review);

      this.review = {
        name: '',
        comment: '',
        rating: null
      };

      alert('Thanks for your review!');
    } else {
      alert('Please fill out all fields before submitting.');
    }
  }
}
