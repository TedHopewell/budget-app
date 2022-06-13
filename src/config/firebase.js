// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

import {getFirestore} from 'firebase/firestore'
const firebaseConfig = {
  apiKey: "AIzaSyCkGq5UeeamrX3btoqA86T7TexBcPgQzUc",
  authDomain: "budget-app-f6f75.firebaseapp.com",
  projectId: "budget-app-f6f75",
  storageBucket: "budget-app-f6f75.appspot.com",
  messagingSenderId: "51952458194",
  appId: "1:51952458194:web:d3fb184fedb277e55c900b",
  measurementId: "G-VTQNN9E3BW"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);
const analytics = getAnalytics(app);

export {auth, db};