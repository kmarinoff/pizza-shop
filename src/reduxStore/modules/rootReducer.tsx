import { firebaseReducer } from "react-redux-firebase";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore"; // <- needed if using firestore
import { cart } from "./cart";
import { errors } from "./errors";
import { loading } from "./loading";
import { pizzas } from "./pizzas";
import { userRolesReducer } from "./users";

export const rootReducer = combineReducers({
  errors,
  loading,
  pizzas,
  users: userRolesReducer,
  cart,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});
