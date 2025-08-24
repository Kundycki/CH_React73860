import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAdgM7Ubs-4r6hTX33i5_seyUHrQ1joTMc",
  authDomain: "ecommerce-73860.firebaseapp.com",
  projectId: "ecommerce-coder-kundy",
  storageBucket: "ecommerce-73860.firebasestorage.app",
  messagingSenderId: "547401232107",
  appId: "1:547401232107:web:dec33e67d98ccccc28d8ae"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

export default db;