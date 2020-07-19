/* eslint no-unused-vars: off */

import { Dispatch } from "redux";
import {
  ADD_TO_CART,
  CLEAR_ITEMS_FROM_CART,
  REMOVE_FROM_CART,
  REMOVE_ITEM_TYPE_FROM_CART,
} from "src/reduxStore/actions/cartActions";
import { CartItem } from "src/types";

const addToCart = (item: CartItem) => (dispatch: Dispatch, getState: any) => {
  dispatch({ type: ADD_TO_CART, payload: item });
};

const removeFromCart = (item: any) => (dispatch: Dispatch, getState: any) => {
  dispatch({ type: REMOVE_FROM_CART, payload: item });
};

const removeItemTypeFromCart = (item: any) => (
  dispatch: Dispatch,
  getState: any
) => {
  dispatch({ type: REMOVE_ITEM_TYPE_FROM_CART, payload: item });
};

const clearItemsFromCart = () => (dispatch: Dispatch, getState: any) => {
  dispatch({ type: CLEAR_ITEMS_FROM_CART });
};

export {
  addToCart,
  removeFromCart,
  removeItemTypeFromCart,
  clearItemsFromCart,
};
