import firebase from "firebase/app";
import "firebase/firestore";

import "firebase/analytics";
import "firebase/auth";
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

// Initialize Firebase
const firebaseInstance: any = firebase.initializeApp(firebaseConfig);
// firebase.analytics();
firebaseInstance.firestore().settings({});

// const rrfProps = {
//   firebaseInstance,
//   config: {
//     userProfile: "users"
//   },
//   dispatch: store.dispatch,
//   createFirestoreInstance
// };

export { firebaseConfig, firebaseInstance };
