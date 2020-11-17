// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDnSnbNdobMDZDLvsm61Mk_8CF2cqOl6ks",
  authDomain: "appmata-cfd64.firebaseapp.com",
  databaseURL: "https://appmata-cfd64.firebaseio.com",
  projectId: "appmata-cfd64",
  storageBucket: "appmata-cfd64.appspot.com",
  messagingSenderId: "574786651898",
  appId: "1:574786651898:web:09a2a57ab6c23be90beb43",
  measurementId: "G-9SV0YSDZGW",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
