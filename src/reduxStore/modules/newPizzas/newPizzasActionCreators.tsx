import {
  DELETE_NEW_PIZZA_FAILURE,
  DELETE_NEW_PIZZA_REQUEST,
  DELETE_NEW_PIZZA_SUCCESS,
  GET_NEW_PIZZA_FAILURE,
  GET_NEW_PIZZA_REQUEST,
  GET_NEW_PIZZA_SUCCESS,
  GET_NEW_PIZZAS_FAILURE,
  GET_NEW_PIZZAS_REQUEST,
  GET_NEW_PIZZAS_SUCCESS,
  SEARCH_NEW_PIZZA_FAILURE,
  SEARCH_NEW_PIZZA_REQUEST,
  SEARCH_NEW_PIZZA_SUCCESS,
  UPDATE_NEW_PIZZAS_FAILURE,
  UPDATE_NEW_PIZZAS_REQUEST,
  UPDATE_NEW_PIZZAS_SUCCESS,
} from "src/reduxStore/actions";

import firebase from "firebase";
import { toast } from "react-toastify";
import { Dispatch } from "redux";

import { firestore } from "src/setup";
import { NewPizza } from "src/types/newPizza";

const getNewPizzas = () => {
  return (dispatch: Dispatch) => {
    dispatch({ type: GET_NEW_PIZZAS_REQUEST });

    firestore
      .collection("pizzas")
      .get()
      .then((querySnapshot: firebase.firestore.QuerySnapshot) => {
        dispatch({ type: GET_NEW_PIZZAS_SUCCESS, payload: querySnapshot });
        // toast.success(`Get pizzas success`);
      })
      .catch(error => {
        dispatch({ type: GET_NEW_PIZZAS_FAILURE, payload: error });
        toast.error(`${error.message}`);
      });
  };
};

const getNewPizza = (pizzaId: string) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: GET_NEW_PIZZA_REQUEST });

    firestore
      .collection("pizzas")
      .doc(pizzaId)
      .get()
      .then((documentSnapshot: firebase.firestore.DocumentSnapshot) => {
        console.log("GET SINGLE PIZZA", documentSnapshot);
        dispatch({ type: GET_NEW_PIZZA_SUCCESS, payload: documentSnapshot });
        // toast.success(`Get pizza success`);
      })
      .catch(error => {
        dispatch({ type: GET_NEW_PIZZA_FAILURE, payload: error });
        toast.error(`${error.message}`);
      });
  };
};

const updateNewPizza = (pizza: NewPizza) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: UPDATE_NEW_PIZZAS_REQUEST, payload: pizza });

    firestore
      .collection("pizzas")
      .doc(pizza.id)
      .update({
        name: pizza.name,
        img: pizza.img,
        price: pizza.price,
        ingredients: pizza.ingredients,
        description: pizza.description,
        createdAt: pizza.createdAt,
      })
      .then(result => {
        dispatch({ type: UPDATE_NEW_PIZZAS_SUCCESS, payload: pizza });
        toast.success(`Update pizza success`);
      })
      .catch(error => {
        dispatch({ type: UPDATE_NEW_PIZZAS_FAILURE, payload: error });
        toast.error(`${error.message}`);
      });
  };
};

const deleteNewPizza = (pizza: NewPizza) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: DELETE_NEW_PIZZA_REQUEST, payload: pizza });

    firestore
      .collection("pizzas")
      .doc(pizza.id)
      .delete()
      .then(() => {
        dispatch({ type: DELETE_NEW_PIZZA_SUCCESS, payload: pizza });
        toast.success(`Pizza deleted successfully`);
      })
      .catch(error => {
        dispatch({ type: DELETE_NEW_PIZZA_FAILURE });
        toast.error(`${error.message}`);
      });
  };
};

const searchPizzas = (searchString: string) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: SEARCH_NEW_PIZZA_REQUEST });

    firestore
      .collection("pizzas")
      .where("name", "in", searchString)
      .get()
      .then((querySnapshot: firebase.firestore.QuerySnapshot) => {
        dispatch({ type: SEARCH_NEW_PIZZA_SUCCESS, payload: querySnapshot });
        // console.log(querySnapshot);
      })
      .catch(error => {
        dispatch({ type: SEARCH_NEW_PIZZA_FAILURE });
        toast.error(`${error.message}`);
      });
  };
};

export {
  getNewPizzas,
  updateNewPizza,
  getNewPizza,
  deleteNewPizza,
  searchPizzas,
};
