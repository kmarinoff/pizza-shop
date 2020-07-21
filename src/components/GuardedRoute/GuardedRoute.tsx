/* eslint-disable */

import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router-dom";
import { IRootState } from "src/types";

interface GuardedRouteProps {
  role: string;
}

const GuardedRoute: React.FC<GuardedRouteProps> = ({
  children,
  role,
  ...rest
}) => {
  // TODO user
  const { user }: { user: any } = useSelector((state: any) => state.user);
  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      render={({ location }) =>
        user && role === user.role ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/home",
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};

export { GuardedRoute };
