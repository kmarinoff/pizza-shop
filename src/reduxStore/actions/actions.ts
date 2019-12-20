import { createAction } from "@reduxjs/toolkit";
import { Pizza } from "src/types";

// Cart
export const ADD_TO_CART: string = "ADD_TO_CART";
export const REMOVE_FROM_CART: string = "REMOVE_FROM_CART";

// Pizzas
const getPizza = createAction("GET_PIZZA", (pizza: Pizza) => {
  return {
    payload: pizza
  };
});

const getPizzasSuccess = createAction(
  "GET_PIZZAS_SUCCESS",
  (pizzas: Pizza[]) => {
    return {
      payload: pizzas
    };
  }
);

// Loading
const setLoading = createAction("SET_LOADING", (isLoading: boolean) => {
  return {
    payload: {
      isLoading
    }
  };
});

// Errors
const getPizzaError = createAction(
  "GET_PIZZA_ERROR",
  (error: { message: string; status: number }) => {
    return {
      payload: {
        ...error
      }
    };
  }
);

const getPizzasError = createAction(
  "GET_PIZZAS_ERROR",
  (error: { message: string; status: number }) => {
    return {
      payload: {
        ...error
      }
    };
  }
);

const unknownError = createAction("UNKNOWN_ERROR", () => {
  return {
    payload: {
      message: "Unnown Error!",
      status: 404
    }
  };
});

export {
  getPizzaError,
  getPizzasError,
  getPizza,
  getPizzasSuccess,
  unknownError,
  setLoading
};
