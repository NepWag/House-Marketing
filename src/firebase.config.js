// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBN8VNZTtznpC5XpmKb5V0GjDsYfMrQqbY",
  authDomain: "house-market-f4921.firebaseapp.com",
  projectId: "house-market-f4921",
  storageBucket: "house-market-f4921.appspot.com",
  messagingSenderId: "972103258546",
  appId: "1:972103258546:web:ddfdd75f04c3940c9fd4ab"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore();