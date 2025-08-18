// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEo9z6ISTIS4STBz26l0QfcFHkRY3K6Sc",
  authDomain: "react-solosphere.firebaseapp.com",
  projectId: "react-solosphere",
  storageBucket: "react-solosphere.firebasestorage.app",
  messagingSenderId: "1064866319773",
  appId: "1:1064866319773:web:5d5c6c9564444c655db374"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;