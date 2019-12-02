import { Pizza } from "src/types";
import { ADD_TO_CART, REMOVE_FROM_CART } from "../actions";

const initState: any[] = [];

const addToCart = (item: any) => {
  return (dispatch: any, getState: any) => {
    dispatch({ type: ADD_TO_CART, payload: item });
  };
};

const removeFromCart = (item: any) => {
  return (dispatch: any, getState: any) => {
    dispatch({ type: REMOVE_FROM_CART, payload: item });
  };
};

const cart = (state: any = initState, action: any) => {
  switch (action.type) {
    case ADD_TO_CART: {
      if (state.find((item: Pizza) => item.id === action.payload.id)) {
        return state.map((item: any) =>
          item.id === action.payload.id
            ? {
                ...item,
                count: item.count + 1
              }
            : item
        );
      } else {
        return [...state, { ...action.payload, count: 1 }];
      }
    }

    case REMOVE_FROM_CART: {
      if (state.find((item: Pizza) => item.id === action.payload.id)) {
        return state
          .map((item: any) =>
            item.id === action.payload.id
              ? {
                  ...item,
                  count: item.count - 1
                }
              : item
          )
          .filter((item: any) => item.count > 0);
      }
      return state;
    }

    default: {
      return state;
    }
  }
};

export { cart, addToCart, removeFromCart };
