// firebaseConfig.js

import * as firebase from 'firebase/compat/app';

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
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export default firebase;