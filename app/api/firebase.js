
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyBIN9X7pvTNBNB8oZjHqpSrewCSKz-Kncw",
  authDomain: "geo-app-47ce7.firebaseapp.com",
  projectId: "geo-app-47ce7",
  storageBucket: "geo-app-47ce7.firebasestorage.app",
  messagingSenderId: "66863903495",
  appId: "1:66863903495:web:0b3ae81b7ec0a12e384ba2",
  measurementId: "G-X3TD84EL2V"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// const analytics = getAnalytics(app);
export { app, db };
