import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";
import thunk from "redux-thunk";
import { rootReducer } from "src/reduxStore";

const composeEnhancers = composeWithDevTools({
  // options like actionSanitizer, stateSanitizer
});

export const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(thunk.withExtraArgument({}))
    // other store enhancers if any
  )
);
