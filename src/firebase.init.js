// Import the functions you need from the SDKs you need
import { getAuth } from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC28DBIO1XRxdKnhrChCxx-EF98oWzLRWg",
  authDomain: "basic-test-9865c.firebaseapp.com",
  projectId: "basic-test-9865c",
  storageBucket: "basic-test-9865c.appspot.com",
  messagingSenderId: "201559662036",
  appId: "1:201559662036:web:0a905e75519326d69e8a41",
  measurementId: "G-VH754QG5SP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export default auth;