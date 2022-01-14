import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  FacebookAuthProvider,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCHfIRA3X6T_eu-5yHumLQVNsdf50ZpDUY",
  authDomain: "blooddonation-d5907.firebaseapp.com",
  projectId: "blooddonation-d5907",
  storageBucket: "blooddonation-d5907.appspot.com",
  messagingSenderId: "831945897431",
  appId: "1:831945897431:web:2f340bab6af68a95728792",
  measurementId: "G-GK8LE1VZS0"
};
let app;
if (!app) {
  app = initializeApp(firebaseConfig);
}

export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
export const facebookProvider = new FacebookAuthProvider();
export default app;
