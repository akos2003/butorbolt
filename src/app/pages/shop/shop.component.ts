import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';
import { TreeWrapPipe } from "../../pipes/tree.pipe";

@Component({
  selector: 'app-suggestion',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    TreeWrapPipe
],
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent {
  suggestionText: string = '';

  submitSuggestion() {
    console.log('Suggestion submitted:', this.suggestionText);
    this.suggestionText = '';
  }
}
