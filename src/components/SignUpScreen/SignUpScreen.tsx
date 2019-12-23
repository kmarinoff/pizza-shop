import React, { FC } from "react";
import { SignUp } from "src/components/SignUpScreen/SignUp";

const SignUpScreen: FC = () => {
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-md-12 col-12 d-flex align-items-center flex-column">
          <h2 className="m-4 text-center">Sign up with Email and Password: </h2>
          <SignUp />
        </div>
      </div>
    </div>
  );
};

export { SignUpScreen };
