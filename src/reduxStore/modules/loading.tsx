import { SET_LOADING } from "../actions";

const initState = { isLoading: true };

const setLoading = (loadingValue: boolean) => {
  return (dispatch: any, getState: any) => {
    // make async call to DB
    dispatch({ type: SET_LOADING, loadingValue });
  };
};

const loading = (state: { isLoading: boolean } = initState, action: any) => {
  switch (action.type) {
    case SET_LOADING: {
      return {
        ...state,
        isLoading: action.loadingValue
      };
    }

    default: {
      return state;
    }
  }
};

export { loading, setLoading };
