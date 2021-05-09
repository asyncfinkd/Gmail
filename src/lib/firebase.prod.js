import Firebase from "firebase/app";
import "firebase/firestore";

const firebaseApp = Firebase.initializeApp({
  apiKey: "AIzaSyDVEfnBnOv3Kmv9oROtODCKtl4pfhhdEw0",
  authDomain: "project-5683637946761684414.firebaseapp.com",
  projectId: "project-5683637946761684414",
  storageBucket: "project-5683637946761684414.appspot.com",
  messagingSenderId: "31938429537",
  appId: "1:31938429537:web:10d42568835a0949202020",
  measurementId: "G-9CGLSCFE4B",
});

const db = firebaseApp.firestore();

export default db;
