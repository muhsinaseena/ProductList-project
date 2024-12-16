// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC-T3ZWT6u1nWeAZXL08MerzlhE8IPRwZA",
  authDomain: "project-9c91d.firebaseapp.com",
  projectId: "project-9c91d",
  storageBucket: "project-9c91d.firebasestorage.app",
  messagingSenderId: "113126208604",
  appId: "1:113126208604:web:49570533594137fb7d2299"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth();
export const db=getFirestore(app)
export default app;