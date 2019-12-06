import firebase from "firebase";
// import { getFirebase, reactReduxFirebase } from "react-redux-firebase";
import { applyMiddleware, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { reduxFirestore } from "redux-firestore";
// import { getFirestore } from "redux-firestore";
import thunk from "redux-thunk";
import { rootReducer } from "src/reduxStore";
import { firebaseInstance } from "src/setup/firebase";
// import { firebaseConfig } from "src/setup";

const rfConfig = {};

// const createStoreWithFirebase = compose(
//   reduxFirestore(firebaseInstance, rfConfig) // firebase instance as first argument, rfConfig as optional second
// )(createStore);

export const store = createStore(
  rootReducer,

  composeWithDevTools(
    compose(
      applyMiddleware(thunk.withExtraArgument({})),
      reduxFirestore(firebaseInstance, rfConfig)
    )
  )
);
