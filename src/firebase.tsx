import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA4LKSSy4sajUoJLgXETk09bWfenxxWCns",
  authDomain: "food-delivery-3cfee.firebaseapp.com",
  projectId: "food-delivery-3cfee",
  storageBucket: "food-delivery-3cfee.firebasestorage.app",
  messagingSenderId: "1073215172796",
  appId: "1:1073215172796:web:3937d8611adcb4573060b9",
  measurementId: "G-66NG1WDT4G"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const auth = getAuth(app);
export const storage = getStorage(app);