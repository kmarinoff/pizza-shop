import { Formik } from "formik";
import React, { FC, useState } from "react";
import Form from "react-bootstrap/Form";
import { Link, useHistory } from "react-router-dom";
import { toast } from "react-toastify";
import { BetterButton } from "src/components/BetterButton";
import { auth, createUserProfileDocument } from "src/setup";
import * as yup from "yup";

const schema = yup.object({
  signUpDisplayName: yup
    .string()
    .required("Display name is a required field")
    .max(50, "Display name must be at most 50 characters"),
  signUpEmail: yup
    .string()
    .required("Email is a required field")
    .max(50, "Email address must be at most 50 characters"),
  signUpPassword: yup
    .string()
    .required("Password is a required field")
    .max(255, "Password must be at most 255 characters")
    .min(6, "Password must be at least 6 characters long"),
  signUpConfirmPassword: yup
    .string()
    .required("Confirm password is a required field")
    .max(255, "Password must be at most 255 characters")
    .min(6, "Password must be at least 6 characters long")
});

const SignUp: FC = () => {
  const history = useHistory();
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  return (
    <>
      <Formik
        validationSchema={schema}
        onSubmit={async (values, action) => {
          if (values.signUpPassword !== values.signUpConfirmPassword) {
            toast.error("Passwords don't match!");
            setIsSubmitting(false);
            return;
          }
          try {
            setIsSubmitting(true);
            const {
              user
            }: {
              user: any;
            } = await auth.createUserWithEmailAndPassword(
              values.signUpEmail,
              values.signUpPassword
            );

            await createUserProfileDocument(user, {
              displayName: values.signUpDisplayName
            });

            await auth.signInWithEmailAndPassword(
              values.signUpEmail,
              values.signUpPassword
            );
            history.push("/");
            toast.info("Sign up successful!");
          } catch (error) {
            console.log("error:", error);
            toast.error(`${error.message}`);
            setIsSubmitting(false);
          }
        }}
        initialValues={{
          signUpDisplayName: "",
          signUpEmail: "",
          signUpPassword: "",
          signUpConfirmPassword: ""
        }}
      >
        {({ handleSubmit, handleChange, values, touched, isValid, errors }) => (
          <Form style={{ width: "100%" }} onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Display name</Form.Label>
              <Form.Control
                id="signup-name"
                name="signUpDisplayName"
                value={values.signUpDisplayName}
                onChange={handleChange}
                type="text"
                placeholder="Enter your display name"
                isValid={touched.signUpDisplayName && !errors.signUpDisplayName}
                isInvalid={!!errors.signUpDisplayName}
              />
              {!!errors.signUpDisplayName ? (
                <Form.Control.Feedback type="invalid">
                  {errors.signUpDisplayName}
                </Form.Control.Feedback>
              ) : (
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              )}
            </Form.Group>

            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                id="signup-email"
                name="signUpEmail"
                value={values.signUpEmail}
                onChange={handleChange}
                type="email"
                placeholder="Enter your email address"
                isValid={touched.signUpEmail && !errors.signUpEmail}
                isInvalid={!!errors.signUpEmail}
              />
              {!!errors.signUpEmail ? (
                <Form.Control.Feedback type="invalid">
                  {errors.signUpEmail}
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
                id="signup-password"
                name="signUpPassword"
                value={values.signUpPassword}
                onChange={handleChange}
                type="password"
                placeholder="Enter your password"
                isValid={
                  touched.signUpPassword &&
                  !errors.signUpPassword &&
                  values.signUpPassword === values.signUpConfirmPassword
                }
                isInvalid={
                  !!errors.signUpPassword ||
                  values.signUpPassword !== values.signUpConfirmPassword
                }
              />
              {!!errors.signUpPassword ||
              values.signUpPassword !== values.signUpConfirmPassword ? (
                values.signUpPassword !== values.signUpConfirmPassword ? (
                  <Form.Control.Feedback type="invalid">
                    Password must match!
                  </Form.Control.Feedback>
                ) : (
                  <Form.Control.Feedback type="invalid">
                    {errors.signUpPassword}
                  </Form.Control.Feedback>
                )
              ) : (
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              )}
            </Form.Group>

            <Form.Group>
              <Form.Label>Confirm password</Form.Label>
              <Form.Control
                id="signup-confirm-password"
                name="signUpConfirmPassword"
                value={values.signUpConfirmPassword}
                onChange={handleChange}
                type="password"
                placeholder="Confirm your password"
                isValid={
                  touched.signUpConfirmPassword &&
                  !errors.signUpConfirmPassword &&
                  values.signUpPassword === values.signUpConfirmPassword
                }
                isInvalid={
                  !!errors.signUpConfirmPassword ||
                  values.signUpPassword !== values.signUpConfirmPassword
                }
              />
              {!!errors.signUpConfirmPassword ||
              values.signUpPassword !== values.signUpConfirmPassword ? (
                values.signUpPassword !== values.signUpConfirmPassword ? (
                  <Form.Control.Feedback type="invalid">
                    Password must match!
                  </Form.Control.Feedback>
                ) : (
                  <Form.Control.Feedback type="invalid">
                    {errors.signUpConfirmPassword}
                  </Form.Control.Feedback>
                )
              ) : (
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              )}
            </Form.Group>
            <div className="conteiner">
              <div className="row no-gutters d-flex justify-content-between align-items-top">
                <div className="col-md-4 col-12">
                  <BetterButton
                    bsPrefix="sign-up-btn"
                    buttonText={isSubmitting ? "Signing you up..." : "Sign Up"}
                    containerStyles={{ width: "100%" }}
                    loading={isSubmitting}
                    disabled={
                      !isValid ||
                      values.signUpPassword !== values.signUpConfirmPassword ||
                      isSubmitting
                    }
                    onClick={handleSubmit}
                  />
                </div>
              </div>
              <div className="row no-gutters d-flex justify-content-between align-items-top">
                <div className="col-md-4 col-12 text-center text-md-left">
                  <Link
                    to="/login"
                    style={{ textAlign: "center", width: "100%" }}
                  >
                    Login with an existing account
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

export { SignUp };
