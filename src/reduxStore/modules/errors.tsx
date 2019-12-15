import { createReducer } from "@reduxjs/toolkit";
import { unknownError } from "../actions";
import { getPizzasError } from "./pizzas";

const initState: any = [];

const errors = createReducer(initState, {
  [getPizzasError.type]: (state, action) => [...state, action.payload],
  [unknownError.type]: (state, action) => [...state, action.payload]
});

export { errors };
