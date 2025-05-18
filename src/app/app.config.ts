import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "webkeret-d628a", appId: "1:179307200777:web:a04af8888e6280f8ee93d8", storageBucket: "webkeret-d628a.firebasestorage.app", apiKey: "AIzaSyARbFXTtm9bmOVDgB9TDxfdYnGx89ckGMc", authDomain: "webkeret-d628a.firebaseapp.com", messagingSenderId: "179307200777" })), provideAuth(() => getAuth()), provideFirestore(() => getFirestore())]
};
