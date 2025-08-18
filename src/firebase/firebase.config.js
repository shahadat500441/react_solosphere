// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABNuYZk7PagtW8Pwy_fZsI5DzbyguFBmQ",
  authDomain: "solosphere-521ef.firebaseapp.com",
  projectId: "solosphere-521ef",
  storageBucket: "solosphere-521ef.firebasestorage.app",
  messagingSenderId: "677851018080",
  appId: "1:677851018080:web:3198076d9877460b04e405"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app