import {
  GET_PIZZA_FAILURE,
  GET_PIZZA_REQUEST,
  GET_PIZZA_SUCCESS,
  GET_PIZZAS_FAILURE,
  GET_PIZZAS_REQUEST,
  GET_PIZZAS_SUCCESS
} from "src/reduxStore/actions";

import { Pizza } from "src/types";

const initState: {
  isFetching: boolean;
  isFailed: boolean;
  pizzas: Pizza[];
} = { isFetching: true, isFailed: false, pizzas: [] };

const pizzasReducer = (state = initState, action: any) => {
  switch (action.type) {
    // GET PIZZA
    case GET_PIZZA_REQUEST: {
      return {
        isFetching: true,
        isFailed: false,
        pizzas: []
      };
    }

    case GET_PIZZA_SUCCESS: {
      return {
        isFetching: false,
        isFailed: false,
        pizzas: [action.payload]
      };
    }

    case GET_PIZZA_FAILURE: {
      return {
        isFetching: false,
        isFailed: true,
        pizzas: []
      };
    }

    // GET PIZZAS
    case GET_PIZZAS_REQUEST: {
      return {
        isFetching: true,
        isFailed: false,
        pizzas: []
      };
    }

    case GET_PIZZAS_SUCCESS: {
      return {
        isFetching: false,
        isFailed: false,
        pizzas: [...action.payload]
      };
    }

    case GET_PIZZAS_FAILURE: {
      return {
        isFetching: false,
        isFailed: true,
        pizzas: []
      };
    }

    // DEFAULT
    default: {
      return state;
    }
  }
};

export { pizzasReducer };
