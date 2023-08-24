import {initializeApp} from 'firebase/app';
import { getFirestore } from "firebase/firestore";
import 'firebase/compat/auth';
import 'firebase/firestore';
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDu2wYiQdM1uIJYXVszTSf4hq5kKLXjE8U",
    authDomain: "filwa-9b5a6.firebaseapp.com",
    projectId: "filwa-9b5a6",
    storageBucket: "filwa-9b5a6.appspot.com",
    messagingSenderId: "377742961920",
    appId: "1:377742961920:web:fdbbf3b4b556be2b5717e5",
    measurementId: "G-K8LFDWKC73"
  };


const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp)
const db = getFirestore();

const provider = new GoogleAuthProvider();

export {auth, provider, firebaseApp};
export default db;