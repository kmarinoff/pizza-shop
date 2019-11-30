import { GET_PIZZAS_ERROR, SET_ERROR, UNKNOWN_ERROR } from "../actions";

const initState: any = [];

const setError = (errorValue: any) => {
  return {
    type: SET_ERROR,
    payload: errorValue
  };
};

const errors = (state: any = initState, action: any) => {
  switch (action.type) {
    case GET_PIZZAS_ERROR: {
      return [...state, action.error];
    }
    case UNKNOWN_ERROR: {
      return [...state, action.error];
    }

    default: {
      return state;
    }
  }
};

export { errors, setError };
