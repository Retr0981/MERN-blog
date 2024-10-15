// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: "mern-blog-dce52.firebaseapp.com",
    projectId: "mern-blog-dce52",
    storageBucket: "mern-blog-dce52.appspot.com",
    messagingSenderId: "531403299767",
    appId: "1:531403299767:web:39e5e3c9fdb2c1a090e632",
    measurementId: "G-GJLXM3TEQM"
  };

// Initialize Firebase
export const app = initializeApp(firebaseConfig);