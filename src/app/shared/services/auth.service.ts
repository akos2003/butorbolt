import { Customer } from '../../pages/profile/model/customer-object';
import { DeliveryAddress } from '../../pages/profile/model/deliveryAddress-object';
import { Injectable } from '@angular/core';
import { from, Observable, of } from 'rxjs';
import { BehaviorSubject } from 'rxjs';
import { map, switchMap } from 'rxjs/operators';
import {
  Auth, 
  signInWithEmailAndPassword,
  signOut,
  authState,
  User,
  UserCredential,
  createUserWithEmailAndPassword,
  user
} from '@angular/fire/auth';

import { 
  Firestore, 
  collection, 
  doc, 
  getDoc, 
  setDoc 
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  currentUser: Observable<Customer | null>;
  private currentUserSubject = new BehaviorSubject<Customer | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  constructor(
    private auth: Auth,
    private firestore: Firestore
  ) {
    this.currentUser = authState(this.auth).pipe(
      switchMap((user: User | null) => {
        if (!user) {
          this.currentUserSubject.next(null);
          return of(null);
        }
        const userDocRef = doc(this.firestore, 'Users', user.uid);
        return from(getDoc(userDocRef)).pipe(
          map(snapshot => {
            const data = snapshot.data();
  
            if (data) {
              const userObj = new Customer(
                data['name'] ?? '',
                data['email'] ?? user.email,
                '',
                data['phone'] ?? '',
                data['id'] ?? user.uid,
                data['address'] ?? { value: null } as unknown as DeliveryAddress
              );
  
              this.currentUserSubject.next(userObj);
              console.log("userObject" + userObj);
              return userObj;
            } else {
              const fallbackUser = new Customer(
                user.displayName ?? '',
                user.email ?? '',
                '0',
                '',
                user.uid,
                { value: null } as unknown as DeliveryAddress
              );
              this.currentUserSubject.next(fallbackUser);
              return fallbackUser;
            }
          })
        );
      })
    );
  }

  signIn(email: string, password: string): Promise<UserCredential> {
    return signInWithEmailAndPassword(this.auth, email, password);
  }

  signOut(): Promise<void> {
    localStorage.setItem('isLoggedIn', 'false');
    return signOut(this.auth).then(() => {
    });
  }

  isLoggedIn(): Observable<Customer | null> {
    return this.currentUser;
  }

  updateLoginStatus(isLoggedIn: boolean): void {
    localStorage.setItem('isLoggedIn', isLoggedIn ? 'true' : 'false');
    console.log("user is "+ this.currentUser)
  }

  async signUp(email: string, password: string, userData: Partial<Customer>): Promise<UserCredential> {
    try {
      const userCredential = await createUserWithEmailAndPassword(this.auth, email, password);

      // Merge user data with Firebase UID and email
      const completeUserData: Customer = new Customer(
        userData.name ?? '',
        email,
        password,
        '0',
        userCredential.user.uid,
        userData.address ?? { value: null } as unknown as DeliveryAddress,
      );

      await this.createUserData(userCredential.user.uid, completeUserData);

      return userCredential;
    } catch (error) {
      console.error('Error during sign-up:', error);
      throw error;
    }
  }

  private async createUserData(userId: string, userData: Customer): Promise<void> {
    const userRef = doc(collection(this.firestore, 'Users'), userId);
    
    const userPlain = {
      name: userData.name,
      email: userData.email,
      password: userData.password,
      phone: userData.phone,
      id: userData.id,
      address: userData.address,
    };

    return setDoc(userRef, userPlain);
  }


}
