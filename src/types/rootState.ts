import { ICartReducer, IPizzasReducer } from "src/reduxStore";

export interface IRootState {
  cart: ICartReducer;
  pizzas: IPizzasReducer;
  firebase: any;
  firestore: any;
}
