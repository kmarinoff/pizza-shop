import React from "react";
import Spinner from "react-bootstrap/Spinner";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router";
import {
  LoginScreen,
  // NoRoute,
  PrivateRoute,
  SignUpScreen
} from "src/components";
import { Checkout, Home, PizzaDetails } from "src/pages";
import { Nav } from "./Nav";

const Routes = () => {
  const { auth, profile }: { auth: any; profile: any } = useSelector(
    (state: any) => state.firebase
  );

  console.log("auth.isLoaded:", auth.isLoaded);
  console.log("profile.isLoaded:", profile.isLoaded);

  return (
    <>
      {auth.isLoaded ? (
        <>
          <Nav isLoggedIn={!profile.isEmpty} />
          <Switch>
            <Route exact path="/login" component={LoginScreen} />
            <Route exact path="/signup" component={SignUpScreen} />
            <PrivateRoute
              profileIsEmpty={profile.isEmpty}
              profileIsLoaded={profile.isLoaded}
            >
              <Route exact path="/" component={Home} />
              <Route exact path="/checkout" component={Checkout} />
              <Route exact path="/pizza/:id" component={PizzaDetails} />
            </PrivateRoute>
          </Switch>
        </>
      ) : (
        <div
          style={{
            minHeight: "80vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <Spinner animation="grow" />
        </div>
      )}
    </>
  );
};

export { Routes };
