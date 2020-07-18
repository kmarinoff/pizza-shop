/* eslint no-unused-vars: off */

import {
  ADD_TO_CART,
  REMOVE_FROM_CART,
  REMOVE_ITEM_TYPE_FROM_CART,
} from "src/reduxStore/actions/cartActions";
import { CartItem } from "src/types";

export interface ICartReducer {
  isFetching: boolean;
  isFailed: boolean;
  cart: CartItem[];
}

const initState: ICartReducer = {
  isFetching: false,
  isFailed: false,
  cart: [],
};

const cartReducer = (state = initState, action: any) => {
  switch (action.type) {
    case ADD_TO_CART: {
      if (
        state.cart.find(
          (item: CartItem) =>
            item.size === action.payload.size &&
            item.name === action.payload.name &&
            item.id === action.payload.id
        )
      ) {
        return {
          ...state,
          cart: state.cart.map((item: any) =>
            item.size === action.payload.size &&
            item.name === action.payload.name &&
            item.id === action.payload.id
              ? {
                  ...item,
                  count: item.count + 1,
                }
              : item
          ),
        };
      }

      return {
        ...state,
        cart: [...state.cart, { ...action.payload, count: 1 }],
      };
    }

    case REMOVE_FROM_CART: {
      if (
        state.cart.find(
          (item: CartItem) =>
            item.size === action.payload.size &&
            item.name === action.payload.name &&
            item.id === action.payload.id
        )
      ) {
        return {
          ...state,
          cart: state.cart
            .map((item: any) =>
              item.size === action.payload.size &&
              item.name === action.payload.name &&
              item.id === action.payload.id
                ? {
                    ...item,
                    count: item.count - 1,
                  }
                : item
            )
            .filter((item: any) => item.count > 0),
        };
      }
      return state;
    }

    case REMOVE_ITEM_TYPE_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((item: CartItem) => {
          if (item.id === action.payload.id) {
            if (item.size !== action.payload.size) {
              return item;
            }
            return null;
          }
          return item;
        }),
      };
    }

    default: {
      return state;
    }
  }
};

export { cartReducer };
