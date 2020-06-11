// import { createReducer } from "@reduxjs/toolkit";
// import { unknownError } from "../actions";
// import { getPizzasError } from "./pizzas";

// const errorsReducer = createReducer(initState, {
//   [getPizzasError.type]: (state, action) => [...state, action.payload],
//   [unknownError.type]: (state, action) => [...state, action.payload]
// });

const initialState: any = [];

const errorsReducer = (state = initialState) => {};

export { errorsReducer };
