// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getAnalytics } from "firebase/analytics";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3hojm6uK_0ldhjhdpPOmCcvLfyZh98xg",
  authDomain: "ojtmonitoringsystem-6c92f.firebaseapp.com",
  projectId: "ojtmonitoringsystem-6c92f",
  storageBucket: "ojtmonitoringsystem-6c92f.firebasestorage.app",
  messagingSenderId: "855244812028",
  appId: "1:855244812028:web:3cc71b543bd037fb8eb179",
  measurementId: "G-KG67XG1PXE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);