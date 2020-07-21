import { Dispatch } from "redux";
import { UNKNOWN_ERROR } from "src/reduxStore/actions/errorsActions";

const unknownError = () => {
  return (dispatch: Dispatch) => {
    dispatch({ type: UNKNOWN_ERROR });
  };
};

export { unknownError };
