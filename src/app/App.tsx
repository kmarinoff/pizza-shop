import React, { FC } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { AuthContextProvider } from "src/components";
import { store } from "src/reduxStore";
import { Routes } from "./Routes";

const App: FC = () => {
  return (
    <AuthContextProvider>
      <Provider store={store}>
        <Router>
          <Routes />
        </Router>
      </Provider>
    </AuthContextProvider>
  );
};

export default App;
