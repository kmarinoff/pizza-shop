import { createReducer } from "@reduxjs/toolkit";
import { setLoading } from "../actions";

const initState = { isLoading: true };

const setLoadingRequest = (loadingValue: boolean) => {
  return (dispatch: any, getState: any) => {
    // make async call to DB
    dispatch(setLoading(loadingValue));
  };
};

const loading = createReducer(initState, {
  [setLoading.type]: (state, action) => action.payload
});

export { loading, setLoadingRequest };
