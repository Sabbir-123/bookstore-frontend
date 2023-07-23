import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBG4FS2sB8Au9sBSFxfSjvBWUISBv0_L4Y",
  authDomain: "bookstore-91ec5.firebaseapp.com",
  projectId: "bookstore-91ec5",
  storageBucket: "bookstore-91ec5.appspot.com",
  messagingSenderId: "355668638127",
  appId: "1:355668638127:web:e09a66f09aee4497bc175a"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
