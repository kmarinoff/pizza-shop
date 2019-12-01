import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions";

const initState: any[] = [];

const addToCart = (item: any) => {
  return (dispatch: any, getState: any) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };
};

const removeFromCart = () => {};

const cart = (state: any = initState, action: any) => {
  switch (action.type) {
    case ADD_TO_CART: {
      return [...state, action.payload];
    }

    case REMOVE_FROM_CART: {
      return [...state];
    }

    default: {
      return state;
    }
  }
};

export { cart, addToCart, removeFromCart };
