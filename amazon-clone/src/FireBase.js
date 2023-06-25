import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {
  apiKey: "AIzaSyC65KaikAkaGXXIVAh5cjWfAV5aWc1imEc",
  authDomain: "clone-6644d.firebaseapp.com",
  projectId: "clone-6644d",
  storageBucket: "clone-6644d.appspot.com",
  messagingSenderId: "973673197072",
  appId: "1:973673197072:web:806804bdfdba148bb3e495",
  measurementId: "G-W0EQCPYZ3H"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };