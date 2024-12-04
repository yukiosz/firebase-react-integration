import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyAAG3L-pOAZlnvjFpXQ-AQ2tXOtlh2wMN8",
    authDomain: "bazar-da-mari.firebaseapp.com",
    projectId: "bazar-da-mari",
    storageBucket: "bazar-da-mari.firebasestorage.app",
    messagingSenderId: "179168364609",
    appId: "1:179168364609:web:aebb3068ab80b698555ec0"
  };
  

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }