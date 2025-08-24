import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC_bBPCquHpnY4eNOzSyS2IlS40EMX_Zxc",
  authDomain: "ecommerce-coder-kundy.firebaseapp.com",
  databaseURL: "https://ecommerce-coder-kundy-default-rtdb.firebaseio.com",
  projectId: "ecommerce-coder-kundy",
  storageBucket: "ecommerce-coder-kundy.firebasestorage.app",
  messagingSenderId: "11760270083",
  appId: "1:11760270083:web:364a3aa52df05d3f904736",
  measurementId: "G-CSY3DX0YQC"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore();

export default db;