import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
  apiKey: "AIzaSyBuq2bAYk63XsNzAjT4_9Dv4kx-JDrEIN0",
  authDomain: "project-58-9a750.firebaseapp.com",
  databaseURL: "https://project-58-9a750-default-rtdb.firebaseio.com",
  projectId: "project-58-9a750",
  storageBucket: "project-58-9a750.appspot.com",
  messagingSenderId: "677937136625",
  appId: "1:677937136625:web:3b337049b57dbb31873a50"
};

//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
