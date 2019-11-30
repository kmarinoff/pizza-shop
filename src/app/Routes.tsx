import React from "react";
import { Route, Switch } from "react-router";
import { Home } from "src/pages/Home";

const Routes = () => {
  return (
    <>
      <Switch>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
};

export { Routes };
