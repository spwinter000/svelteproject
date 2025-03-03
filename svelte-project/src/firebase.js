// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth } from 'firebase/auth';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUkGxDT-lQKnrrj7LJeWxrKxVraG4PBlQ",
  authDomain: "svelte-chat-d32ec.firebaseapp.com",
  projectId: "svelte-chat-d32ec",
  storageBucket: "svelte-chat-d32ec.firebasestorage.app",
  messagingSenderId: "1065677287656",
  appId: "1:1065677287656:web:d49c731934810965b4195d"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
//const auth2 = authImport.getAuth();
const auth = getAuth(app);

// export const auth = firebase.auth(app);
export { auth };
export const googleProvider = new firebase.auth.GoogleAuthProvider();
export const db = firebase.firestore();