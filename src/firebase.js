// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "@firebase/firestore";
import { getStorage } from 'firebase/storage';

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSl4NHuuhX79skQ3LKXEL__fFmRPbr1iI",
  authDomain: "task7-2d-58ee0.firebaseapp.com",
  projectId: "task7-2d-58ee0",
  storageBucket: "task7-2d-58ee0.appspot.com",
  messagingSenderId: "440409895132",
  appId: "1:440409895132:web:2a0cb21ccb17ae54e88419",
  measurementId: "G-SCXYXFF1P4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app); 
export const storage = getStorage(app);