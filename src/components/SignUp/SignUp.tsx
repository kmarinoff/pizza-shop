import { Formik } from "formik";
import React, { FC } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { auth, createUserProfileDocument } from "src/setup";
import * as yup from "yup";

const schema = yup.object({
  displayName: yup
    .string()
    .required()
    .max(50),
  email: yup
    .string()
    .required()
    .max(50),
  password: yup
    .string()
    .required()
    .max(255),
  confirmPassword: yup
    .string()
    .required()
    .max(255)
});

const SignUp: FC = () => {
  return (
    <>
      <Formik
        validationSchema={schema}
        onSubmit={console.log}
        initialValues={{
          displayName: "",
          email: "",
          password: "",
          confirmPassword: ""
        }}
      >
        {({
          handleSubmit,
          handleChange,
          handleBlur,
          values,
          touched,
          isValid,
          errors
        }) => (
          <Form style={{ width: "100%" }} onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Label>Display Name</Form.Label>
              <Form.Control
                id="signup-name"
                name="displayName"
                value={values.displayName}
                onChange={handleChange}
                type="text"
                placeholder="Enter your display name"
                isValid={touched.displayName && !errors.displayName}
                isInvalid={!!errors.displayName}
              />
              {!!errors.displayName ? (
                <Form.Control.Feedback type="invalid">
                  {errors.displayName}
                </Form.Control.Feedback>
              ) : (
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              )}
            </Form.Group>

            <Form.Group>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                id="signup-email"
                name="email"
                value={values.email}
                onChange={handleChange}
                type="email"
                placeholder="Enter your email"
                isValid={touched.email && !errors.email}
                isInvalid={!!errors.email}
              />
              {!!errors.email ? (
                <Form.Control.Feedback type="invalid">
                  {errors.email}
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
                name="password"
                value={values.password}
                onChange={handleChange}
                type="password"
                placeholder="Enter your password"
                isValid={touched.password && !errors.password}
                isInvalid={!!errors.password}
              />
              {!!errors.password ? (
                <Form.Control.Feedback type="invalid">
                  {errors.password}
                </Form.Control.Feedback>
              ) : (
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              )}
            </Form.Group>

            <Form.Group>
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                id="signup-confirm-password"
                name="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
                type="password"
                placeholder="Confirm your password"
                isValid={touched.confirmPassword && !errors.confirmPassword}
                isInvalid={!!errors.confirmPassword}
              />
              {!!errors.confirmPassword ? (
                <Form.Control.Feedback type="invalid">
                  {errors.confirmPassword}
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
                    className="p-2 my-2"
                    style={{ width: "100%" }}
                    disabled={!isValid}
                  >
                    Sign up
                  </Button>
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
