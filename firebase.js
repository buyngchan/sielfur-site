// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7UuqPTbv22dFHz5ugxdwnz0XDTDUQiP0",
  authDomain: "jjub0812.firebaseapp.com",
  projectId: "jjub0812",
  storageBucket: "jjub0812.firebasestorage.app",
  messagingSenderId: "713500860924",
  appId: "1:713500860924:web:364e16fa1d2a1dbbef5279",
  measurementId: "G-X7MESKH6MX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
