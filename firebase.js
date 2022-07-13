import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = initializeApp({
  apiKey: "AIzaSyBF6lNqLqnuODHitwq7yr_wmzrbxn_JJm8",
  authDomain: "librarysystem-c9b1a.firebaseapp.com",
  databaseURL: "https://librarysystem-c9b1a-default-rtdb.firebaseio.com",
  projectId: "librarysystem-c9b1a",
  storageBucket: "librarysystem-c9b1a.appspot.com",
  messagingSenderId: "633030572821",
  appId: "1:633030572821:web:de3a3bf5004330a6a9871c",
  measurementId: "G-DFWFEX0CY6"
});

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);