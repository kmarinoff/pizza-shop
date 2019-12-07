import React, { useContext } from "react";
import { Redirect, Route, Switch } from "react-router";
import {
  AuthContext,
  LoginScreen,
  NoRoute,
  PrivateRoute
} from "src/components";
import { Home, PizzaDetails } from "src/pages";
import { Nav } from "./Nav";

const Routes = () => {
  const { currentUser }: { currentUser: firebase.User } = useContext(
    AuthContext
  );
  return (
    <>
      <Nav isLoggedIn={!!currentUser} />
      <Switch>
        {!!currentUser ? (
          <Route exact path="/login">
            <Redirect exact to="/home" />
          </Route>
        ) : (
          <Route exact path="/login">
            <LoginScreen />
          </Route>
        )}
        <PrivateRoute isLoggedIn={!!currentUser}>
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
