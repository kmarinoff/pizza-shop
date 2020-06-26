import {
  GET_NEW_PIZZAS_FAILURE,
  GET_NEW_PIZZAS_REQUEST,
  GET_NEW_PIZZAS_SUCCESS
} from "src/reduxStore/actions";

import { NewPizza } from "src/types/newPizza";

import firebase from "firebase";

export interface INewPizzaReducer {
  isFetching: boolean;
  isFailed: boolean;
  newPizzas: any;
}

const initState: INewPizzaReducer = {
  isFetching: true,
  isFailed: false,
  newPizzas: []
};

const newPizzasReducer = (state: INewPizzaReducer = initState, action: any) => {
  switch (action.type) {
    // GET PIZZAS FROM FIRESTORE
    case GET_NEW_PIZZAS_REQUEST: {
      return {
        isFetching: true,
        isFailed: false,
        newPizzas: []
      };
    }

    case GET_NEW_PIZZAS_SUCCESS: {
      const newPizzasArray: NewPizza[] = [];

      action.payload.forEach(
        (item: firebase.firestore.QueryDocumentSnapshot) => {
          const pizza = item.data() as NewPizza;
          newPizzasArray.push(pizza);
        }
      );

      return {
        isFetching: false,
        isFailed: false,
        newPizzas: [...state.newPizzas, ...newPizzasArray]
      };
    }

    case GET_NEW_PIZZAS_FAILURE: {
      return {
        isFetching: false,
        isFailed: true,
        newPizzas: []
      };
    }

    default: {
      return state;
    }
  }
};

export { newPizzasReducer };
