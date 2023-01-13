import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAmfEj7obznwKn-nw299nOqP40pHPSDt-Q",
    authDomain: "todo-app-15292.firebaseapp.com",
    projectId: "todo-app-15292",
    storageBucket: "todo-app-15292.appspot.com",
    messagingSenderId: "805901242817",
    appId: "1:805901242817:web:95028de62adfd79fed1f40"
  };

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };