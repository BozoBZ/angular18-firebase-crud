import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'ng-tasks-18',
        appId: '1:208192070375:web:fbe6dd7c32dec42575f842',
        storageBucket: 'ng-tasks-18.appspot.com',
        apiKey: 'AIzaSyDOltR7VprIePkdNHJ6Klg7keHUbO6U4ro',
        authDomain: 'ng-tasks-18.firebaseapp.com',
        messagingSenderId: '208192070375',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'ng-tasks-18',
        appId: '1:208192070375:web:13844e9ab9fe6a8a75f842',
        storageBucket: 'ng-tasks-18.appspot.com',
        apiKey: 'AIzaSyDOltR7VprIePkdNHJ6Klg7keHUbO6U4ro',
        authDomain: 'ng-tasks-18.firebaseapp.com',
        messagingSenderId: '208192070375',
      })
    ),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
};
