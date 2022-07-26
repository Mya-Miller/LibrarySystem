import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const config = {
    /*apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    databaseURL: process.env.DATABASE_URL,
    projectId: process.env.PROJECT_URL,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGIN_SENDER_ID,
    appId: process.env.APP_ID*/
    apiKey: "AIzaSyBF6lNqLqnuODHitwq7yr_wmzrbxn_JJm8",
  authDomain: "librarysystem-c9b1a.firebaseapp.com",
  databaseURL: "https://librarysystem-c9b1a-default-rtdb.firebaseio.com",
  projectId: "librarysystem-c9b1a",
  storageBucket: "librarysystem-c9b1a.appspot.com",
  messagingSenderId: "633030572821",
  appId: "1:633030572821:web:de3a3bf5004330a6a9871c",
  measurementId: "G-DFWFEX0CY6"
};

export const app = initializeApp(config);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);