import { Dispatch } from "redux";
import {
  ADD_TO_CART,
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

export { addToCart, removeFromCart, removeItemTypeFromCart };
