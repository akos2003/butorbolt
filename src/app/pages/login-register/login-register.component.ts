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
import { CommonModule } from '@angular/common';
import { Customer } from '../profile/model/customer-object';
import { AuthService } from '../../shared/services/auth.service';
import { Router } from '@angular/router';
import { PrettyButtonPipe } from "../../pipes/stars.pipe";
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-login-register',
  imports: [    FormsModule,
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
      PrettyButtonPipe],
  templateUrl: './login-register.component.html',
  styleUrl: './login-register.component.css'
})
export class LoginRegisterComponent {
  authSubscribtion?: Subscription;
  loginData = {
    email: '',
    password: ''
  };

  registerData = {
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

  signupError = '';
  loginError ='';
  constructor(private authService : AuthService, private router : Router ){

  }

  onLogin() {
      this.loginError = '';
  
      this.authService.signIn(this.loginData.email, this.loginData.password)
        .then(userCredential => {
          console.log('Login successful:', userCredential.user);
          this.authService.updateLoginStatus(true);
          this.router.navigateByUrl('/profile');
          console.log('Login:', this.loginData);
          alert('Login successful!');
        })
        .catch(error => {
          console.error('Login error:', error);
          
          switch(error.code) {
            case 'auth/user-not-found':
              this.loginError = 'No account found with this email address';
              break;
            case 'auth/wrong-password':
              this.loginError = 'Incorrect password';
              break;
            case 'auth/invalid-credential':
              this.loginError = 'Invalid email or password';
              break;
            default:
              this.loginError = 'Authentication failed. Please try again later.';
          }
        });
  }

  onRegister() {
    if (this.registerData.password !== this.registerData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const userData: Partial<Customer> = {
      name: this.registerData.name,
      email: this.registerData.email,
      password: this.registerData.password
    };
  
    this.authService.signUp(this.registerData.email, this.registerData.password, userData)
        .then(userCredential => {
          console.log('Registration succesful:', userCredential.user);
          this.authService.updateLoginStatus(true);
          this.router.navigateByUrl('/login-register');
          //console.log('Register:', this.registerData);
          alert('Registration successful! Please login!');
        })
        .catch(error => {
          console.error('Regisztrációs hiba:', error);
          
          switch(error.code) {
            case 'auth/email-already-in-use':
              this.signupError = 'This email already in use.';
              break;
            case 'auth/invalid-email':
              this.signupError = 'Invalid email.';
              break;
            case 'auth/weak-password':
              this.signupError = 'The password is too weak. Use at least 6 characters.';
              break;
            default:
              this.signupError = 'An error has occurred during registration. Please try again later.';
          }
        });
  }

  ngOnDestroy(){
    this.authSubscribtion?.unsubscribe();
  }
}
