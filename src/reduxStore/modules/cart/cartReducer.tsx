import {
  ADD_TO_CART,
  REMOVE_FROM_CART
} from "src/reduxStore/actions/cartActions";

import { CartItem, Pizza } from "src/types";

export interface ICartReducer {
  isFetching: boolean;
  isFailed: boolean;
  cart: CartItem[];
}

const initState: ICartReducer = {
  isFetching: false,
  isFailed: false,
  cart: []
};

const cartReducer = (state = initState, action: any) => {
  switch (action.type) {
    case ADD_TO_CART: {
      if (state.cart.find((item: Pizza) => item.id === action.payload.id)) {
        return {
          ...state,
          cart: state.cart.map((item: any) =>
            item.id === action.payload.id
              ? {
                  ...item,
                  count: item.count + 1
                }
              : item
          )
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, count: 1 }]
        };
      }
    }

    case REMOVE_FROM_CART: {
      if (state.cart.find((item: Pizza) => item.id === action.payload.id)) {
        return {
          ...state,
          cart: state.cart
            .map((item: any) =>
              item.id === action.payload.id
                ? {
                    ...item,
                    count: item.count - 1
                  }
                : item
            )
            .filter((item: any) => item.count > 0)
        };
      }
      return state;
    }

    default: {
      return state;
    }
  }
};

export { cartReducer };
