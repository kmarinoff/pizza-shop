import React, { FC } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { signInWithFacebook, signInWithGoogle } from "src/setup";

const LogIn: FC = () => {
  return (
    <>
      <Form style={{ width: "100%" }}>
        <Form.Group>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            id="login-email"
            type="email"
            placeholder="Enter email"
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group>
          <Form.Label>Password</Form.Label>
          <Form.Control
            id="login-password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <div className="conteiner">
          <div className="row no-gutters d-flex justify-content-between align-items-top">
            <div className="col-4">
              <Button
                variant="primary"
                type="submit"
                className="p-2 my-2"
                style={{ width: "100%" }}
              >
                Login with Email
              </Button>
            </div>
            <div className="col-2 text-center my-2">Or:</div>
            <div className="col-4">
              <Button
                variant="primary"
                type="button"
                className="p-2 my-2"
                style={{ width: "100%" }}
                onClick={signInWithGoogle}
              >
                Login with Google
              </Button>
              <Button
                variant="primary"
                type="button"
                className="p-2 my-2"
                style={{ width: "100%" }}
                onClick={signInWithFacebook}
              >
                Login with Facebook
              </Button>
            </div>
          </div>
        </div>
      </Form>
    </>
  );
};

export { LogIn };
