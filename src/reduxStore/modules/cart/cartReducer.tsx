import {
  ADD_TO_CART,
  REMOVE_FROM_CART
} from "src/reduxStore/actions/cartActions";

import { CartItem, Pizza } from "src/types";

const initState: CartItem[] = [];

const cartReducer = (state = initState, action: any) => {
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

export { cartReducer };
