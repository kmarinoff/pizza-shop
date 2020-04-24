import { firebaseReducer } from "react-redux-firebase";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore"; // <- needed if using firestore
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { cart } from "./cart";
import { errors } from "./errors";
import { loadingReducer } from "./loading";
import { pizzas } from "./pizzas";
import { userRolesReducer } from "./users";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
};

const rootReducer = combineReducers({
  errors,
  loading: loadingReducer,
  pizzas,
  users: userRolesReducer,
  cart,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

export const persistedRootReducer = persistReducer(persistConfig, rootReducer);
