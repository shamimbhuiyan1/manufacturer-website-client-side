// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC6VO5NLABvg7aCtzQUpWfCjf9dWXm94IY",
  authDomain: "car-tools-management.firebaseapp.com",
  projectId: "car-tools-management",
  storageBucket: "car-tools-management.appspot.com",
  messagingSenderId: "997531773353",
  appId: "1:997531773353:web:100e1910c37821eb873cb8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
