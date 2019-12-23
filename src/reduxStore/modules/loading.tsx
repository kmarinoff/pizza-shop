// import { createReducer } from "@reduxjs/toolkit";
// import { setLoading } from "../actions";

// const initState = { isLoading: true };

// const setLoadingRequest = (loadingValue: boolean) => {
//   return (dispatch: any, getState: any) => {
//     // make async call to DB
//     dispatch(setLoading(loadingValue));
//   };
// };

// const loading = createReducer(initState, {
//   [setLoading.type]: (state, action) => action.payload
// });

// export { loading, setLoadingRequest };

const loadingReducer = (state = {}, action: any) => {
  const { type } = action;
  const matches = /(.*)_(REQUEST|SUCCESS|FAILURE)/.exec(type);

  // not a *_REQUEST / *_SUCCESS /  *_FAILURE actions, so we ignore them
  if (!matches) {
    return state;
  }

  const [, requestName, requestState] = matches;
  return {
    ...state,
    // Store whether a request is happening at the moment or not
    // e.g. will be true when receiving GET_TODOS_REQUEST
    //      and false when receiving GET_TODOS_SUCCESS / GET_TODOS_FAILURE
    [requestName]: requestState === "REQUEST"
  };
};

export { loadingReducer };
