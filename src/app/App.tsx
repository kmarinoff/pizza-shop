import React, { FC } from "react";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { BrowserRouter as Router } from "react-router-dom";
import { createFirestoreInstance } from "redux-firestore"; // <- needed if using firestore
import { AuthContextProvider } from "src/components";
import { store } from "src/reduxStore";
import { firebaseInstance } from "src/setup/firebase";
import { Routes } from "./Routes";

const rrfConfig = {
  userProfile: "users",
  useFirestoreForProfile: true // Firestore for Profile instead of Realtime DB
};

const rrfProps = {
  firebase: firebaseInstance,
  config: rrfConfig,
  dispatch: store.dispatch,
  createFirestoreInstance // <- needed if using firestore
};

const App: FC = () => {
  return (
    <AuthContextProvider>
      <Provider store={store}>
        <ReactReduxFirebaseProvider {...rrfProps}>
          <Router>
            <Routes />
          </Router>
        </ReactReduxFirebaseProvider>
      </Provider>
    </AuthContextProvider>
  );
};

export default App;
