/* eslint no-console: off, no-unused-vars: off */

import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

import firebase from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD391bkZq429ARLXPzIKfVw4vcZ2ncY108",
  authDomain: "kmarinoff-pizza-shop.firebaseapp.com",
  databaseURL: "https://kmarinoff-pizza-shop.firebaseio.com",
  projectId: "kmarinoff-pizza-shop",
  storageBucket: "kmarinoff-pizza-shop.appspot.com",
  messagingSenderId: "667388534185",
  appId: "1:667388534185:web:4ca9f15fd26615424bf8b8",
  measurementId: "G-PLS31PP2VZ",
};

// Initialize Firebase
const firebaseInstance: firebase.app.App = firebase.initializeApp(
  firebaseConfig
);
const auth = firebase.auth();
// const firebaseAnalytics = firebase.analytics();

// Initialize other services on firebase instance
const firestore = firebaseInstance.firestore(); // <- needed if using firestore
// const firestoreFunctions = firebase.functions(); // <- needed if using httpsCallable

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
googleAuthProvider.setCustomParameters({ prompt: "select_account" });
const signInWithGoogle = async () => {
  await auth.signInWithPopup(googleAuthProvider);
};

const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
// facebookAuthProvider.addScope("user_birthday");
facebookAuthProvider.setCustomParameters({ display: "popup" });
const signInWithFacebook = async () => {
  await auth
    .signInWithPopup(facebookAuthProvider)
    .then((result: any) => {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      // const token = result.credential.accessToken;
      // The signed-in user info.
      // const user = result.user;
      // ...
    })
    .catch((error: any) => {
      // Handle Errors here.
      // const errorCode = error.code;
      // const errorMessage = error.message;
      // The email of the user's account used.
      // const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      // const credential = error.credential;
      // ...
    });
};

const createUserProfileDocument = async (
  userAuth: firebase.User,
  additionalData?: any
) => {
  if (!userAuth) {
    return null;
  }
  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email, photoURL } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        photoURL,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("error creating user", error.message);
    }
  }

  return userRef;
};

// eslint-disable-next-line no-return-await
const signOut = async () => await auth.signOut();

// Get a reference to the storage service,
// which is used to create references in your storage bucket
const storage = firebaseInstance.storage();

export {
  firebaseConfig,
  firebaseInstance,
  auth,
  firestore,
  signInWithGoogle,
  signOut,
  signInWithFacebook,
  createUserProfileDocument,
  storage,
};
