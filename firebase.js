// firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyA7UuqPTbv22dFHz5ugxdwnz0XDTDUQiP0",
  authDomain: "jjub0812.firebaseapp.com",
  projectId: "jjub0812",
  storageBucket: "jjub0812.firebasestorage.app",
  messagingSenderId: "713500860924",
  appId: "1:713500860924:web:364e16fa1d2a1dbbef5279",
  measurementId: "G-X7MESKH6MX"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
