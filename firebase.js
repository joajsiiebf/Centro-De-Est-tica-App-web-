// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Tu configuración Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCi4fNeMbEW217mdvMkK0Gyly7h6ofAm4s",
  authDomain: "webb-61a11.firebaseapp.com",
  projectId: "webb-61a11",
  storageBucket: "webb-61a11.firebasestorage.app",
  messagingSenderId: "731120586497",
  appId: "1:731120586497:web:91f08f54ea3cfd0cf8d500",
  measurementId: "G-XNL6FZVQ4P"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Exporta Firestore y Auth
export const db = getFirestore(app);
export const auth = getAuth(app);
