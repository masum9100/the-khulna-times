// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJcZwOx2tNUKBRTaa-1uQ72ySnkoHSzfU",
  authDomain: "the-khulna-times-25ee7.firebaseapp.com",
  projectId: "the-khulna-times-25ee7",
  storageBucket: "the-khulna-times-25ee7.appspot.com",
  messagingSenderId: "671208645701",
  appId: "1:671208645701:web:a931b60c479d7ac4392f2c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app