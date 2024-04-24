import { initializeApp } from "firebase/app";


import {getFirestore} from'@firebase/firestore'
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBDBHu4uFd5a7pUsZutlog-smvUUTzWCGI",
  authDomain: "gestion-app-back-ef777.firebaseapp.com",
  projectId: "gestion-app-back-ef777",
  storageBucket: "gestion-app-back-ef777.appspot.com",
  messagingSenderId: "92413297199",
  appId: "1:92413297199:web:d423aab5aad56a1a053cda"
};

const app = initializeApp(firebaseConfig);
export const initDataBase = getFirestore(app)
export const initStorage = getStorage(app)
export const initauth = getAuth(app)