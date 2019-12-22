import { Formik } from "formik";
import React, { FC, useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Spinner from "react-bootstrap/Spinner";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { signInWithFacebook, signInWithGoogle } from "src/setup";
import { auth } from "src/setup";
import * as yup from "yup";

const schema = yup.object({
  loginEmail: yup
    .string()
    .required("Email is a required field")
    .max(50, "Email address must be at most 50 characters"),
  loginPassword: yup
    .string()
    .required("Password is a required field")
    .max(255, "Password must be at most 255 characters")
    .min(6, "Password must be at least 6 characters long")
});

const LogIn: FC = () => {
  const history = useHistory();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [isSubmittingGoogle, setIsSubmittingGoogle] = useState<boolean>(false);
  const [isSubmittingFacebok, setIsSubmittingFacebook] = useState<boolean>(
    false
  );

  return (
    <>
      <Formik
        validationSchema={schema}
        onSubmit={async (values, action) => {
          setIsSubmitting(true);
          try {
            await auth.signInWithEmailAndPassword(
              values.loginEmail,
              values.loginPassword
            );
            history.push("/");
            toast.info("Login success!");
          } catch (error) {
            console.log("error:", error);
            toast.error(`${error.message}`);
          }
        }}
        initialValues={{
          loginEmail: "",
          loginPassword: ""
        }}
      >
        {({ handleSubmit, handleChange, values, touched, isValid, errors }) => (
          <Form style={{ width: "100%" }} onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                id="login-email"
                name="loginEmail"
                value={values.loginEmail}
                onChange={handleChange}
                type="email"
                placeholder="Enter email"
                isValid={touched.loginEmail && !errors.loginEmail}
                isInvalid={!!errors.loginEmail}
              />
              {!!errors.loginEmail ? (
                <Form.Control.Feedback type="invalid">
                  {errors.loginEmail}
                </Form.Control.Feedback>
              ) : (
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              )}
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group>
              <Form.Label>Password</Form.Label>
              <Form.Control
                id="login-password"
                name="loginPassword"
                value={values.loginPassword}
                onChange={handleChange}
                type="password"
                placeholder="Password"
                isValid={touched.loginPassword && !errors.loginPassword}
                isInvalid={!!errors.loginPassword}
              />
              {!!errors.loginPassword ? (
                <Form.Control.Feedback type="invalid">
                  {errors.loginPassword}
                </Form.Control.Feedback>
              ) : (
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              )}
            </Form.Group>
            <div className="conteiner">
              <div className="row no-gutters d-flex justify-content-between align-items-top">
                <div className="col-4">
                  <Button
                    variant="primary"
                    type="submit"
                    className="p-2 my-2 d-flex  justify-content-center align-items-center"
                    style={{ width: "100%" }}
                    disabled={!isValid || isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <Spinner
                          className="mx-2"
                          as="span"
                          animation="border"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                        />
                        Loading...
                      </>
                    ) : (
                      "Login with Email"
                    )}
                  </Button>
                </div>
                <div className="col-2 text-center my-2">Or:</div>
                <div className="col-4">
                  <Button
                    variant="primary"
                    type="button"
                    className="p-2 my-2 d-flex  justify-content-center align-items-center"
                    style={{ width: "100%" }}
                    onClick={async () => {
                      setIsSubmittingGoogle(true);
                      try {
                        await signInWithGoogle();
                        history.push("/");
                        toast.info("Login with Google success!");
                      } catch (error) {
                        setIsSubmittingGoogle(false);
                        toast.info(error.message);
                      }
                    }}
                    disabled={isSubmitting || isSubmittingGoogle}
                  >
                    {isSubmittingGoogle ? (
                      <>
                        <Spinner
                          className="mx-2"
                          as="span"
                          animation="border"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                        />
                        Logging in with Google...
                      </>
                    ) : (
                      "Login with Google"
                    )}
                  </Button>
                  <Button
                    variant="primary"
                    type="button"
                    className="p-2 my-2 d-flex  justify-content-center align-items-center"
                    style={{ width: "100%" }}
                    onClick={async () => {
                      setIsSubmittingFacebook(true);
                      try {
                        await signInWithFacebook();
                        history.push("/");
                        // toast.info("Login with Facebook success!");
                      } catch (error) {
                        console.log(error);
                        setIsSubmittingFacebook(false);
                        toast.info(error.message);
                      }
                    }}
                    disabled={isSubmitting || isSubmittingFacebok}
                  >
                    {isSubmittingFacebok ? (
                      <>
                        <Spinner
                          className="mx-2"
                          as="span"
                          animation="border"
                          size="sm"
                          role="status"
                          aria-hidden="true"
                        />
                        Logging in with Facebook...
                      </>
                    ) : (
                      "Login with Facebook"
                    )}
                  </Button>
                  <Link
                    to="/signup"
                    style={{ textAlign: "center", width: "100%" }}
                  >
                    Don't have an account yet?
                  </Link>
                </div>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </>
  );
};

export { LogIn };
