import { applyMiddleware, compose, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { rootReducer } from "src/reduxStore";

export const store = createStore(
  rootReducer,

  composeWithDevTools(compose(applyMiddleware(thunk.withExtraArgument({}))))
);
