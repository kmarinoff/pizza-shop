import "firebase/analytics";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import { createFirestoreInstance } from "redux-firestore";
import { store } from "src/reduxStore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD391bkZq429ARLXPzIKfVw4vcZ2ncY108",
  authDomain: "kmarinoff-pizza-shop.firebaseapp.com",
  databaseURL: "https://kmarinoff-pizza-shop.firebaseio.com",
  projectId: "kmarinoff-pizza-shop",
  storageBucket: "kmarinoff-pizza-shop.appspot.com",
  messagingSenderId: "667388534185",
  appId: "1:667388534185:web:4ca9f15fd26615424bf8b8",
  measurementId: "G-PLS31PP2VZ"
};

const rrfProps = {
  firebase,
  config: {
    userProfile: "users"
  },
  dispatch: store.dispatch,
  createFirestoreInstance
};

// Initialize Firebase
const firebaseInstance = firebase.initializeApp(firebaseConfig);
// firebase.analytics();
firebase.firestore().settings({});

export { firebaseConfig, rrfProps, firebaseInstance };
