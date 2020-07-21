/* eslint-disable */

import React from "react";
import { Redirect, Route } from "react-router-dom";

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
          // eslint-disable-next-line react/jsx-props-no-spreading
          {...rest}
          render={({ location }) =>
            !profileIsEmpty ? (
              children
            ) : (
              <Redirect
                to={{
                  pathname: "/shop",
                  state: { from: location },
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
