import React, { FC } from "react";
import { Provider } from "react-redux";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { BrowserRouter as Router } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";
import { createFirestoreInstance } from "redux-firestore"; // <- needed if using firestore
import { PersistGate } from "redux-persist/integration/react";
import { AuthContextProvider } from "src/components";
import { persistor, store } from "src/reduxStore";
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

toast.configure();

const App: FC = () => {
  return (
    <AuthContextProvider>
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <ReactReduxFirebaseProvider {...rrfProps}>
            <Router basename="/">
              <Routes />
            </Router>
          </ReactReduxFirebaseProvider>
        </PersistGate>
      </Provider>
    </AuthContextProvider>
  );
};

export default App;
