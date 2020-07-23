import firebase from "firebase";
import { Token } from "react-stripe-checkout";
// import { toast } from "react-toastify";
// import { Dispatch } from "redux";
import {
  GET_PAYMENTS_FAILURE,
  GET_PAYMENTS_REQUEST,
  GET_PAYMENTS_SUCCESS,
} from "src/reduxStore/actions";
// import { firestore } from "src/setup";

export interface IPaymentsReducer {
  isFetching: boolean;
  isFailed: boolean;
  payments: Array<{ tokenObject: Token; userId: string }>;
}

const initState: IPaymentsReducer = {
  isFetching: true,
  isFailed: false,
  payments: [],
};

const paymentsReducer = (state: IPaymentsReducer = initState, action: any) => {
  switch (action.type) {
    case GET_PAYMENTS_REQUEST: {
      return {
        isFetching: true,
        isFailed: false,
        payments: [],
      };
    }

    case GET_PAYMENTS_SUCCESS: {
      const paymentsArray: Array<{ tokenObject: Token; userId: string }>[] = [];

      action.payload.forEach(
        (item: firebase.firestore.QueryDocumentSnapshot) => {
          const paymentItem = item.data() as Array<{
            tokenObject: Token;
            userId: string;
          }>;
          paymentsArray.push(paymentItem);
        }
      );

      return {
        isFetching: false,
        isFailed: false,
        payments: [...state.payments, ...paymentsArray],
      };
    }

    case GET_PAYMENTS_FAILURE: {
      return {
        isFetching: false,
        isFailed: true,
        payments: [],
      };
    }

    default: {
      return state;
    }
  }
};

export { paymentsReducer };
