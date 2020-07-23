import firebase from "firebase";
import { toast } from "react-toastify";
import { Dispatch } from "redux";
import {
  GET_PAYMENTS_FAILURE,
  GET_PAYMENTS_REQUEST,
  GET_PAYMENTS_SUCCESS,
} from "src/reduxStore/actions";
import { firestore } from "src/setup";

const getPayments = () => {
  return (dispatch: Dispatch) => {
    dispatch({ type: GET_PAYMENTS_REQUEST });

    firestore
      .collection("payments")
      .get()
      .then((querySnapshot: firebase.firestore.QuerySnapshot) => {
        dispatch({ type: GET_PAYMENTS_SUCCESS, payload: querySnapshot });
        // toast.success(`Get pizzas success`);
      })
      .catch((error) => {
        dispatch({ type: GET_PAYMENTS_FAILURE, payload: error });
        toast.error(`${error.message}`);
      });
  };
};

export { getPayments };
