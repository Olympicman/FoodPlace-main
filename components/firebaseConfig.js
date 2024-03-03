// firebaseConfig.js
// No platform specific modifications in this file (verified)

// Purpose: This file contains the configuration for the Firebase app.
// It is used to initialize the Firebase app and to export the auth object.

// WARNING: This file contains sensitive information. Do not share it with anyone.
// This file should not be committed to a public repository.
// Failure to do so may result in legal action.


// Used Firebase features: Authentication


// Firebase modules
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {

    apiKey: "AIzaSyB_esAAw6GuoXPo8luIVBs-Xaf8vqcQeBw",
  
    authDomain: "foodplace-1c9c8.firebaseapp.com",
  
    projectId: "foodplace-1c9c8",
  
    storageBucket: "foodplace-1c9c8.appspot.com",
  
    messagingSenderId: "16253739738",
  
    appId: "1:16253739738:web:9f22887fe051ac4f85fbe3",
  
    measurementId: "G-18T4BS2QJW"
  
  };
  

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export { firebaseApp, auth };