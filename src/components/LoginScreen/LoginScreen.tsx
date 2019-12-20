import React, { FC } from "react";
import { LogIn } from "src/components/LogIn";
import { SignUp } from "src/components/SignUp";

const LoginScreen: FC = () => {
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-md-6 col-12 d-flex align-items-center flex-column">
          <h2 className="m-4 text-center">Login: </h2>
          <LogIn />
        </div>
        <div className="col-md-6 col-12 d-flex align-items-center flex-column">
          <h2 className="m-4 text-center">Sign up with Email and Password: </h2>
          <SignUp />
        </div>
      </div>
    </div>
  );
};

export { LoginScreen };
