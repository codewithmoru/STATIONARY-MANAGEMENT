import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyDYkFPrNb1OdhIHdikHNmMODYWTzWq49s4",
  authDomain: "stationary-856f6.firebaseapp.com",
  projectId: "stationary-856f6",
  storageBucket: "stationary-856f6.appspot.com",
  messagingSenderId: "570930481509",
  appId: "1:570930481509:web:81c89575171d7cd33e798c",
  measurementId: "G-HQR5JE32XH"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getDatabase(app);
