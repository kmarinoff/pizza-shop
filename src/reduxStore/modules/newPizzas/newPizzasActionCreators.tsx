import {
  GET_NEW_PIZZAS_FAILURE,
  GET_NEW_PIZZAS_REQUEST,
  GET_NEW_PIZZAS_SUCCESS
} from "src/reduxStore/actions";

import firebase from "firebase";
import { toast } from "react-toastify";
import { Dispatch } from "redux";

import { firestore } from "src/setup";

const getNewPizzas = () => {
  return (dispatch: Dispatch) => {
    dispatch({ type: GET_NEW_PIZZAS_REQUEST });

    firestore
      .collection("pizzas")
      .get()
      .then((querySnapshot: firebase.firestore.QuerySnapshot) => {
        dispatch({ type: GET_NEW_PIZZAS_SUCCESS, payload: querySnapshot });
        toast.success(`Get pizzas success`);
      })
      .catch(error => {
        dispatch({ type: GET_NEW_PIZZAS_FAILURE, payload: error });
        toast.error(`${error.message}`);
      });
  };
};

export { getNewPizzas };
