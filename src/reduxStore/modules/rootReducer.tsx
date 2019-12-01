import { combineReducers } from "redux";
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
  cart
});
