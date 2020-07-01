import React from "react";

import { Formik } from "formik";
import { Button, Container, Form } from "react-bootstrap";
import * as yup from "yup";

import { useDispatch } from "react-redux";
import { NewPizza } from "src/types/newPizza";

import {
  getNewPizza,
  updateNewPizza
} from "src/reduxStore/modules/newPizzas/newPizzasActionCreators";

interface PizzaItemProps {
  pizza: NewPizza;
}

const schema = yup.object({
  id: yup.string().required(),
  name: yup.string().required(),
  img: yup.string().required(),
  price: yup
    .array()
    .of(
      yup
        .number()
        .max(3)
        .required()
    )
    .required(),
  ingredients: yup
    .array()
    .of(yup.string().min(1))
    .required(),
  description: yup.string().required(),
  createdAt: yup.date().required()
});

const PizzaItem: React.FC<PizzaItemProps> = ({ pizza }) => {
  const dispatch = useDispatch();
  const [isEditing, setIsEditing] = React.useState<boolean>(false);

  const initialValue: NewPizza = {
    ...pizza
  };

  return (
    <Container style={{ position: "relative" }}>
      {isEditing ? (
        <>
          <Formik
            // validationSchema={schema}
            onSubmit={async (values, action) => {
              const updatedPizza = {
                ...values
              };
              dispatch(updateNewPizza(updatedPizza));
              setIsEditing(false);
            }}
            initialValues={initialValue}
          >
            {({
              handleSubmit,
              handleChange,
              values,
              touched,
              isValid,
              errors
            }) => (
              <>
                <Form onSubmit={handleSubmit}>
                  <Form.Group>
                    <Form.Label>Pizza Name</Form.Label>
                    <Form.Control
                      id="pizza-name"
                      name="name"
                      value={values.name}
                      onChange={handleChange}
                      type="text"
                      placeholder="Pizza Name"
                      isValid={touched.name && !errors.name}
                      isInvalid={!!errors.name}
                      disabled={!isEditing}
                    />
                  </Form.Group>
                  <Form.Group>
                    <Button
                      variant="primary"
                      onClick={() => {
                        handleSubmit();
                      }}
                    >
                      Save Changes
                    </Button>
                  </Form.Group>
                </Form>
                <Button
                  style={{ position: "absolute", top: 0, right: 0 }}
                  onClick={() => {
                    setIsEditing(!isEditing);
                  }}
                >
                  Edit Pizza
                </Button>
              </>
            )}
          </Formik>
        </>
      ) : (
        <>
          <div
            style={{
              margin: "10px 0",
              height: "100%",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <div>{pizza.name}</div>
            <Button
              onClick={() => {
                setIsEditing(!isEditing);
              }}
            >
              Edit Pizza
            </Button>
          </div>
        </>
      )}
    </Container>
  );
};

export { PizzaItem };
