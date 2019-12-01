import React from "react";
import { Redirect, Route } from "react-router";

interface PrivateRouteProps {
  isLoggedIn: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  children,
  isLoggedIn,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={({ location }) =>
        isLoggedIn ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

export { PrivateRoute };
