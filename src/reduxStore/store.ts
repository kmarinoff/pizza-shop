import { applyMiddleware, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { rootReducer } from "src/reduxStore";

const getStore =
  !process.env.NODE_ENV || process.env.NODE_ENV === "development"
    ? createStore(
        rootReducer,
        composeWithDevTools(
          compose(applyMiddleware(thunk.withExtraArgument({})))
        )
      )
    : createStore(
        rootReducer,
        compose(applyMiddleware(thunk.withExtraArgument({})))
      );

export const store = getStore;
