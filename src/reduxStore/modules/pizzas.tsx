import axios from "axios";
import {
  GET_PIZZAS,
  GET_PIZZAS_ERROR,
  SET_LOADING,
  UNKNOWN_ERROR
} from "../actions";

const initState: any[] = [];

const getPizzas = () => {
  // make async call to DB
  return (dispatch: any, getState: any) => {
    dispatch({ type: SET_LOADING, loadingValue: true });

    axios({
      method: "get",
      url: `/pizzas`
    })
      .then(res => {
        dispatch({
          type: GET_PIZZAS,
          pizzas: res.data
        });

        dispatch({ type: SET_LOADING, loadingValue: false });
      })
      .catch(err => {
        const error = {
          message: "Error on getting pizzas",
          status: 404
        };
        if (error) {
          dispatch({
            type: GET_PIZZAS_ERROR,
            error
          });
        } else {
          dispatch({
            type: UNKNOWN_ERROR,
            error: {
              message: "Unknown error",
              status: 404
            }
          });
        }

        dispatch({ type: "SET_LOADING", loadingValue: false });
      });
  };
};

const pizzas = (state = initState, action: any = {}) => {
  switch (action.type) {
    case GET_PIZZAS: {
      return [...action.pizzas];
    }

    default: {
      return state;
    }
  }
};

export { pizzas, getPizzas };
