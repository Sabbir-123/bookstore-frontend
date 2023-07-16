import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBD6hqLt5V6ysmdHw0eS3A-RoxXsn4zUFU",
  authDomain: "tech-net-aed12.firebaseapp.com",
  projectId: "tech-net-aed12",
  storageBucket: "tech-net-aed12.appspot.com",
  messagingSenderId: "404717095556",
  appId: "1:404717095556:web:90db56953005c659b0d0d1"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
