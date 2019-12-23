import { createReducer } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";
import {
  getPizza,
  getPizzaError,
  getPizzasError,
  getPizzasSuccess,
  setLoading,
  unknownError
} from "../actions";

const initState: any[] = [];

const getPizzasRequest = (pizzaId?: string) => {
  // make async call to DB
  return (dispatch: any, getState: any) => {
    // dispatch(setLoading(true));

    if (pizzaId) {
      axios({
        method: "get",
        url: `/pizzas/${pizzaId}`
      })
        .then(res => {
          dispatch(getPizza(res.data));
          // dispatch(setLoading(false));
          toast.success(`Get pizza success: ${res.data.name}`);
        })
        .catch(err => {
          const error = {
            message: "Error on getting pizza",
            status: 404
          };
          if (error) {
            dispatch(getPizzaError(error));
            toast.error(`${error.status}: ${error.message}`);
          } else {
            dispatch(unknownError());
            toast.error(`404: Unknown error}`);
          }

          // dispatch(setLoading(false));
        });
    } else {
      axios({
        method: "get",
        url: `/pizzas`
      })
        .then(res => {
          dispatch(getPizzasSuccess(res.data));
          dispatch(setLoading(false));
          toast.success("Get pizzas success");
        })
        .catch(err => {
          const error = {
            message: "Error on getting pizzas",
            status: 404
          };
          if (error) {
            dispatch(getPizzasError(error));
            toast.error(`${error.status}: ${error.message}`);
          } else {
            dispatch(unknownError());
            toast.error(`404: Unknown error}`);
          }

          dispatch(setLoading(false));
        });
    }
  };
};

const pizzas = createReducer(initState, {
  [getPizza.type]: (state, action) => [action.payload],
  [getPizzasSuccess.type]: (state, action) => action.payload
});

export { pizzas, getPizzasRequest, getPizzasError };
