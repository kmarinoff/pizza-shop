import axios from "axios";
import { toast } from "react-toastify";

import {
  GET_PIZZA_FAILURE,
  GET_PIZZA_REQUEST,
  GET_PIZZA_SUCCESS,
  GET_PIZZAS_FAILURE,
  GET_PIZZAS_REQUEST,
  GET_PIZZAS_SUCCESS
} from "src/reduxStore/actions/pizzasActions";

import { Dispatch } from "redux";

const getPizza = (pizzaId: string) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: GET_PIZZA_REQUEST });

    axios
      .get(`/pizzas/${pizzaId}`)
      .then(res => {
        // display toast msg when we get the pizza
        // toast.success(`Get pizza success: ${res.data.name}`);
        dispatch({ type: GET_PIZZA_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: GET_PIZZA_FAILURE, payload: err });
      });
  };
};

const getPizzas = () => {
  return (dispatch: Dispatch) => {
    dispatch({ type: GET_PIZZAS_REQUEST });

    axios
      .get(`/pizzas`)
      .then(res => {
        // display toast msg when we get the pizzas
        // toast.success(`Get pizzas success`);
        dispatch({ type: GET_PIZZAS_SUCCESS, payload: res.data });
      })
      .catch(err => {
        const error = {
          message: "Error on getting pizza",
          status: 404
        };

        if (error) {
          toast.error(`${error.status}: ${error.message}`);
          dispatch({ type: GET_PIZZAS_FAILURE, payload: error });
        }
      });
  };
};

// const getPizzasRequest = (pizzaId?: string) => {
//   // make async call to DB
//   return (dispatch: any, getState: any) => {
//     // dispatch(setLoading(true));

//     if (pizzaId) {
//       axios({
//         method: "get",
//         url: `/pizzas/${pizzaId}`
//       })
//         .then(res => {
//           dispatch(getPizza(res.data));
//           // dispatch(setLoading(false));

//           // display toast msg when we get the pizza
//           // toast.success(`Get pizza success: ${res.data.name}`);
//         })
//         .catch(err => {
//           const error = {
//             message: "Error on getting pizza",
//             status: 404
//           };
//           if (error) {
//             dispatch(getPizzaError(error));
//             toast.error(`${error.status}: ${error.message}`);
//           } else {
//             dispatch(unknownError());
//             toast.error(`404: Unknown error}`);
//           }

//           // dispatch(setLoading(false));
//         });
//     } else {
//       axios({
//         method: "get",
//         url: `/pizzas`
//       })
//         .then(res => {
//           dispatch(getPizzasSuccess(res.data));
//           dispatch(setLoading(false));

//           // display toast msg when we get the pizza
//           // toast.success("Get pizzas success");
//         })
//         .catch(err => {
//           const error = {
//             message: "Error on getting pizzas",
//             status: 404
//           };
//           if (error) {
//             dispatch(getPizzasError(error));
//             toast.error(`${error.status}: ${error.message}`);
//           } else {
//             dispatch(unknownError());
//             toast.error(`404: Unknown error}`);
//           }

//           dispatch(setLoading(false));
//         });
//     }
//   };
// };

export { getPizza, getPizzas };
