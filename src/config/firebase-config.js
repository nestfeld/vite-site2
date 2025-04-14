import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider }  from "firebase/auth";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDAKfgsQHz8hBSnInIs1ePJ-91pBjXBXqE",
  authDomain: "fir-ignat.firebaseapp.com",
  projectId: "fir-ignat",
  storageBucket: "fir-ignat.firebasestorage.app",
  messagingSenderId: "374127064576",
  appId: "1:374127064576:web:ddef13a5747a5932ce4ae5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);