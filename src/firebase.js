// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore'
const firebaseConfig = {

    apiKey: "AIzaSyCJ-7nLELV_PRV6tP2Uk22uY5wDZgMb--c",
  
    authDomain: "eshop-8bbd9.firebaseapp.com",
  
    projectId: "eshop-8bbd9",
  
    storageBucket: "eshop-8bbd9.appspot.com",
  
    messagingSenderId: "163979146645",
  
    appId: "1:163979146645:web:39aad6d8b51c071672329c",
  
    measurementId: "G-TFLW9NV6RL"
  
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };