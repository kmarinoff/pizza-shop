import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";
import { persistStore } from "redux-persist";
import thunk from "redux-thunk";
import { persistedRootReducer } from "src/reduxStore";

const composeEnhancers = composeWithDevTools({
  // options like actionSanitizer, stateSanitizer
});

export const store = createStore(
  persistedRootReducer,
  composeEnhancers(
    applyMiddleware(thunk.withExtraArgument({}))
    // other store enhancers if any
  )
);

export const persistor = persistStore(store);
