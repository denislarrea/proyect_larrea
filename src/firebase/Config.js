// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDiOimo3-XBE4C2WOIptpAObj-a1VwNvD0",
  authDomain: "mercadoshop-c49e5.firebaseapp.com",
  projectId: "mercadoshop-c49e5",
  storageBucket: "mercadoshop-c49e5.appspot.com",
  messagingSenderId: "832300261086",
  appId: "1:832300261086:web:fb0fb4a86db27f46036c4f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
