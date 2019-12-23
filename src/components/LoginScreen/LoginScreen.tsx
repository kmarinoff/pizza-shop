import React, { FC } from "react";
import { LogIn } from "src/components/LoginScreen/LogIn";

const LoginScreen: FC = () => {
  return (
    <div className="container">
      <div className="row mt-4">
        <div className="col-md-12 col-12 d-flex align-items-center flex-column">
          <h2 className="m-4 text-center">Login: </h2>
          <LogIn />
        </div>
      </div>
    </div>
  );
};

export { LoginScreen };
