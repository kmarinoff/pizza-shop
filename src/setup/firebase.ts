import "firebase/analytics";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

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
const firebaseInstance = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const firestore = firebaseInstance.firestore();
// const firebaseAnalytics = firebase.analytics();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
googleAuthProvider.setCustomParameters({ proppt: "select_account" });
const signInWithGoogle = () => {
  auth.signInWithPopup(googleAuthProvider);
};

const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
// facebookAuthProvider.addScope("user_birthday");
facebookAuthProvider.setCustomParameters({ display: "popup" });
const signInWithFacebook = () => {
  auth
    .signInWithPopup(facebookAuthProvider)
    .then((result: any) => {
      // This gives you a Facebook Access Token. You can use it to access the Facebook API.
      const token = result.credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      // ...
    })
    .catch((error: any) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      // ...
    });
};

const signOut = () => auth.signOut();

export {
  firebaseConfig,
  firebaseInstance,
  auth,
  firestore,
  signInWithGoogle,
  signOut,
  signInWithFacebook
};
