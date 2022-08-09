/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDvA8C69MTDOnGPB08cq4bNPWwoCLfeG5g",
    authDomain: "property-trading-app.firebaseapp.com",
    projectId: "property-trading-app",
    storageBucket: "property-trading-app.appspot.com",
    messagingSenderId: "545990157139",
    appId: "1:545990157139:web:eb2c081c9bf9579157b7a6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();