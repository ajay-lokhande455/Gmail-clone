
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { GoogleAuthProvider, getAuth } from "firebase/auth/web-extension";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDhadVyTItGDreGFSZLYpW8N83igco8V_s",
  authDomain: "clone-ecf32.firebaseapp.com",
  projectId: "clone-ecf32",
  storageBucket: "clone-ecf32.firebasestorage.app",
  messagingSenderId: "539418500361",
  appId: "1:539418500361:web:d7021d15d1b7db7c3647d8",
  measurementId: "G-PDHVCEWLWP"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export const provider = new GoogleAuthProvider()