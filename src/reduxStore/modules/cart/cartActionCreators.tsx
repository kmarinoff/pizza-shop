import {
  ADD_TO_CART,
  REMOVE_FROM_CART
} from "src/reduxStore/actions/cartActions";

import { Dispatch } from "redux";

const addToCart = (item: any) => {
  return (dispatch: Dispatch, getState: any) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };
};

const removeFromCart = (item: any) => {
  return (dispatch: Dispatch, getState: any) => {
    dispatch({ type: REMOVE_FROM_CART, payload: item });
  };
};

export { addToCart, removeFromCart };
