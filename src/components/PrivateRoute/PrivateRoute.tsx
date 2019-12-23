import React from "react";
import { Redirect, Route } from "react-router";

interface PrivateRouteProps {
  profileIsEmpty: boolean;
  profileIsLoaded: boolean;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  children,
  profileIsEmpty,
  profileIsLoaded,
  ...rest
}) => {
  return (
    <>
      {profileIsLoaded && (
        <Route
          {...rest}
          render={({ location }) =>
            !profileIsEmpty ? (
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
      )}
    </>
  );
};

export { PrivateRoute };
