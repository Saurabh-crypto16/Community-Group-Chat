// v9 compat packages are API compatible with v8 code
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

//firebase config
const firebaseConfig = {
  apiKey: "AIzaSyAkqRAql_diRIT0hub6__Arb6vK705qiwA",
  authDomain: "discord-c0011.firebaseapp.com",
  projectId: "discord-c0011",
  storageBucket: "discord-c0011.appspot.com",
  messagingSenderId: "558690827512",
  appId: "1:558690827512:web:c5613878c8cd6a91214f0d",
  measurementId: "G-QNCW2TL4X6",
};

//initializing the firebase app
const firebaseApp = firebase.initializeApp(firebaseConfig);

//getting the database in db
const db = firebaseApp.firestore();

//getting auth
const auth = firebase.auth();

//getting google auth
const provider = new firebase.auth.GoogleAuthProvider();

//explicit exports for having multiple named exports per file
export { auth, provider };

//default export
export default db;
