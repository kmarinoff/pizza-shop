import { firebaseReducer } from "react-redux-firebase";
import { combineReducers } from "redux";
import { firestoreReducer } from "redux-firestore"; // <- needed if using firestore
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { cartReducer } from "./cart";
import { pizzasReducer } from "./pizzas";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
};

const rootReducer = combineReducers({
  pizzas: pizzasReducer,
  cart: cartReducer,
  firebase: firebaseReducer,
  firestore: firestoreReducer
});

export const persistedRootReducer = persistReducer(persistConfig, rootReducer);
