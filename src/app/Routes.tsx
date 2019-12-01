import React from "react";
import { Redirect, Route, Switch } from "react-router";
import { LoginScreen, NoRoute, PrivateRoute } from "src/components";
import { Home, PizzaDetails } from "src/pages";

const Routes = () => {
  const isLoggedIn: boolean = true;
  return (
    <>
      <Switch>
        {/* TODO login variable */}
        {isLoggedIn ? (
          <Route exact path="/login">
            <Redirect exact to="/home" />
          </Route>
        ) : (
          <Route exact path="/login">
            <LoginScreen />
          </Route>
        )}
        {/* TODO login variable */}
        <PrivateRoute isLoggedIn={isLoggedIn}>
          <Switch>
            <Route exact path="/">
              <Redirect exact to="/home" />
            </Route>
            <Route exact path="/home" component={Home} />
            <Route path="/home/pizza/:id" component={PizzaDetails} />
            {/* <GuardedRoute role="ADMIN">
              <Route path="/admin" component={AdminPanel} />
            </GuardedRoute> */}
            <Route path="/" component={NoRoute} />
          </Switch>
        </PrivateRoute>
      </Switch>
    </>
  );
};

export { Routes };
