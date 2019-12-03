// import firebase from "firebase";
// import { getFirebase, reactReduxFirebase } from "react-redux-firebase";
import { applyMiddleware, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
// import { reduxFirestore } from "redux-firestore";
// import { getFirestore } from "redux-firestore";
import thunk from "redux-thunk";
import { rootReducer } from "src/reduxStore";
// import { firebaseConfig } from "src/setup";

// const rfConfig = {};

export const store = createStore(
  rootReducer,
  composeWithDevTools(
    compose(
      applyMiddleware(thunk.withExtraArgument({}))
      // reduxFirestore(firebase, rfConfig)
    )
  )
);
