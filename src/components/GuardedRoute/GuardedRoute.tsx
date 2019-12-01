import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";

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
      {...rest}
      render={({ location }) =>
        user && role === user.role ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/home",
              state: { from: location }
            }}
          />
        )
      }
    />
  );
};

export { GuardedRoute };
