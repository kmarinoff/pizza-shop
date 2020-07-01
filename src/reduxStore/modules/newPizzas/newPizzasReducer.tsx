import {
  GET_NEW_PIZZA_FAILURE,
  GET_NEW_PIZZA_REQUEST,
  GET_NEW_PIZZA_SUCCESS,
  GET_NEW_PIZZAS_FAILURE,
  GET_NEW_PIZZAS_REQUEST,
  GET_NEW_PIZZAS_SUCCESS,
  UPDATE_NEW_PIZZAS_FAILURE,
  UPDATE_NEW_PIZZAS_REQUEST,
  UPDATE_NEW_PIZZAS_SUCCESS
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
          pizza.id = item.id;
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

    case UPDATE_NEW_PIZZAS_REQUEST: {
      return state;
    }

    case UPDATE_NEW_PIZZAS_SUCCESS: {
      return {
        isFetching: false,
        isFailed: false,
        newPizzas: state.newPizzas.map((pizza: NewPizza) => {
          if (pizza.id !== action.payload.id) {
            return pizza;
          } else {
            return action.payload;
          }
        })
      };
    }

    case UPDATE_NEW_PIZZAS_FAILURE: {
      return {
        isFetching: false,
        isFailed: true,
        newPizzas: []
      };
    }

    case GET_NEW_PIZZA_REQUEST: {
      // return {
      //   isFetching: true,
      //   isFailed: false,
      //   newPizzas: []
      // };
      return state;
    }

    case GET_NEW_PIZZA_SUCCESS: {
      // const newPizzasArray: NewPizza[] = [];

      // action.payload.forEach(
      //   (item: firebase.firestore.QueryDocumentSnapshot) => {
      //     const pizza = item.data() as NewPizza;
      //     pizza.id = item.id;
      //     newPizzasArray.push(pizza);
      //   }
      // );

      // return {
      //   isFetching: false,
      //   isFailed: false,
      //   newPizzas: [...state.newPizzas, ...newPizzasArray]
      // };
      return state;
    }

    case GET_NEW_PIZZA_FAILURE: {
      // return {
      //   isFetching: false,
      //   isFailed: true,
      //   newPizzas: []
      // };
      return state;
    }

    default: {
      return state;
    }
  }
};

export { newPizzasReducer };
