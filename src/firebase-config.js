// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";


const firebaseConfig = {
 apiKey: "AIzaSyCUQlm4iexGVhtl7A9Pp2L8XQKZj3guRIw",
  authDomain: "chatapp-e905d.firebaseapp.com",
  projectId: "chatapp-e905d",
  storageBucket: "chatapp-e905d.appspot.com",
  messagingSenderId: "331673433121",
  appId: "1:331673433121:web:922cd0bf0537ba6d3c9f60",
  measurementId: "G-BCEM5EE1QW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
