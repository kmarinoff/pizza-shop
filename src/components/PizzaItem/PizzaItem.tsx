import { Formik } from "formik";
import isNumber from "is-number";
import { Base64 } from "js-base64";
import React from "react";
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { useDispatch } from "react-redux";
import CreatableSelect from "react-select/creatable";
import { toast } from "react-toastify";
import {
  deleteNewPizza,
  getNewPizza,
  updateNewPizza
} from "src/reduxStore/modules/newPizzas/newPizzasActionCreators";
import { NewPizza } from "src/types/newPizza";
import * as yup from "yup";

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

  const initialValue: {
    id: string;
    name: string;
    img: string;
    size: number;
    smallPrice: number;
    mediumPrice: number;
    largePrice: number;
    ingredients: string[];
    description: string;
    createdAt: Date;
  } = {
    id: pizza.id,
    name: pizza.name,
    img: pizza.img,
    size: pizza.size,
    smallPrice: pizza.price[0],
    mediumPrice: pizza.price[1],
    largePrice: pizza.price[2],
    ingredients: pizza.ingredients,
    description: pizza.description,
    createdAt: pizza.createdAt
  };

  const initialFileState = { preview: "", raw: undefined };

  const [file, setFile] = React.useState<{
    preview: string;
    raw?: File;
  }>(initialFileState);

  const [isImageLoading, setIsImageLoading] = React.useState(false);

  return (
    <Formik
      // validationSchema={schema}
      onSubmit={async (values, action) => {
        const updatedPizza: NewPizza = {
          id: values.id,
          name: values.name,
          img: values.img,
          size: values.size,
          price: [
            Number(values.smallPrice),
            Number(values.mediumPrice),
            Number(values.largePrice)
          ],
          ingredients: values.ingredients,
          description: values.description,
          createdAt: values.createdAt
        };
        console.log(updatedPizza);
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
        errors,
        setFieldValue,
        resetForm
      }) => (
        <>
          <div
            style={{ padding: "10px", maxWidth: "1000px", margin: "0 auto" }}
          >
            <div
              style={{
                margin: "30px",
                padding: "10px",
                backgroundColor: "white",
                borderRadius: "10px",
                boxShadow: "0px 0px 15px 5px rgba(0, 0, 0, 0.1)"
              }}
            >
              <Container>
                <Form onSubmit={handleSubmit}>
                  <Row>
                    <Col
                      xs="4"
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center"
                      }}
                    >
                      {isEditing ? (
                        <Form.File id="formcheck-api-regular">
                          {!isImageLoading ? (
                            <img
                              style={{
                                width: "100%",
                                borderRadius: "10px"
                              }}
                              src={file?.preview ? file?.preview : values.img}
                              alt={pizza.name}
                            />
                          ) : (
                            <div
                              style={{
                                width: "100%",
                                height: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center"
                              }}
                            >
                              <Spinner animation="grow" />
                            </div>
                          )}
                          <Form.File.Input
                            style={{ display: isImageLoading ? "none" : "" }}
                            name="img"
                            onChange={(
                              event: React.ChangeEvent<HTMLInputElement>
                            ) => {
                              // debugger;
                              if (
                                event.target.files &&
                                event.target.files.length > 0
                              ) {
                                const fileType = event.target.files[0].type;

                                if (
                                  fileType === "image/jpeg" ||
                                  fileType === "image/png"
                                ) {
                                  setIsImageLoading(true);
                                  setFile({
                                    preview: URL.createObjectURL(
                                      event.target.files[0]
                                    ),
                                    raw: event.target.files[0]
                                  });
                                  // base64 encode the pizza image
                                  event.target.files[0]
                                    .arrayBuffer()
                                    .then(result => {
                                      if (result) {
                                        const encodedBase64Image = Base64.fromUint8Array(
                                          new Uint8Array(result)
                                        );

                                        setFieldValue(
                                          "img",
                                          `data:${fileType};base64,${encodedBase64Image}`
                                        );
                                        setIsImageLoading(false);
                                      }
                                    })
                                    .catch(error => {
                                      console.log(error);
                                    });
                                } else {
                                  // console.log("File type not supported!");
                                  toast.error("File type not supported");
                                  setFile({ preview: "", raw: undefined });
                                }
                              }
                            }}
                          />
                        </Form.File>
                      ) : (
                        <img
                          style={{
                            width: "100%",
                            borderRadius: "10px"
                          }}
                          src={pizza.img}
                          alt={pizza.name}
                        />
                      )}
                    </Col>
                    <Col
                      xs="8"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        marginBottom: "20px"
                      }}
                    >
                      <Row>
                        <Col xs="12" style={{ marginBottom: "20px" }}>
                          {isEditing ? (
                            <>
                              <Form.Group
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  alignItems: "center",
                                  margin: 0
                                }}
                              >
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
                            </>
                          ) : (
                            <>
                              <span style={{ fontStyle: "italic" }}>
                                Name:{" "}
                              </span>
                              {pizza.name}
                            </>
                          )}
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="12" style={{ marginBottom: "20px" }}>
                          {isEditing ? (
                            <>
                              <Form.Group
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  alignItems: "center",
                                  margin: 0
                                }}
                              >
                                <Form.Control
                                  as="textarea"
                                  rows={4}
                                  id="pizza-description"
                                  name="description"
                                  value={values.description}
                                  onChange={handleChange}
                                  type="text"
                                  placeholder="Pizza Description"
                                  isValid={
                                    touched.description && !errors.description
                                  }
                                  isInvalid={!!errors.description}
                                  disabled={!isEditing}
                                  style={{ resize: "none" }}
                                />
                              </Form.Group>
                            </>
                          ) : (
                            <>
                              <span style={{ fontStyle: "italic" }}>
                                Description:{" "}
                              </span>
                              {pizza.description
                                ? pizza.description
                                : "No Description"}
                            </>
                          )}
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="12" style={{ marginBottom: "20px" }}>
                          {isEditing ? (
                            <CreatableSelect
                              isMulti
                              name="ingredients"
                              onChange={(newValue: any, actionMeta: any) => {
                                if (newValue !== null) {
                                  const ingredientsValues = newValue.map(
                                    (item: any) => item.value
                                  );
                                  setFieldValue(
                                    "ingredients",
                                    ingredientsValues
                                  );
                                } else {
                                  setFieldValue("ingredients", []);
                                }
                              }}
                              value={values.ingredients.map(
                                (ingredient: string) => ({
                                  label: ingredient,
                                  value: ingredient
                                })
                              )}
                              noOptionsMessage={() => {
                                return "Type an ingredient ...";
                              }}
                            />
                          ) : (
                            <>
                              <span style={{ fontStyle: "italic" }}>
                                Ingredients:{" "}
                              </span>
                              {pizza.ingredients.map(
                                (ingredient: string, idx: number) => {
                                  if (pizza.ingredients.length !== idx + 1) {
                                    return (
                                      <span key={idx}>{ingredient}, </span>
                                    );
                                  } else {
                                    return <span key={idx}>{ingredient}</span>;
                                  }
                                }
                              )}
                            </>
                          )}
                        </Col>
                      </Row>
                      <Row>
                        <Col xs="4" style={{ marginBottom: "20px" }}>
                          {isEditing ? (
                            <>
                              <Form.Group
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  alignItems: "center",
                                  margin: 0
                                }}
                              >
                                <Form.Control
                                  type="text"
                                  id="pizza-price-small"
                                  name="smallPrice"
                                  value={values.smallPrice}
                                  onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                  ) => {
                                    if (
                                      event.currentTarget.value === "" ||
                                      isNumber(event.currentTarget.value)
                                    ) {
                                      handleChange(event);
                                    }
                                  }}
                                  placeholder="Small price"
                                  isValid={
                                    touched.smallPrice && !errors.smallPrice
                                  }
                                  isInvalid={!!errors.smallPrice}
                                  style={{ resize: "none" }}
                                />
                              </Form.Group>
                            </>
                          ) : (
                            <>Small: $ {Number(pizza.price[0]).toFixed(2)}</>
                          )}
                        </Col>
                        <Col xs="4" style={{ marginBottom: "20px" }}>
                          {isEditing ? (
                            <>
                              <Form.Group
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  alignItems: "center",
                                  margin: 0
                                }}
                              >
                                <Form.Control
                                  type="text"
                                  id="pizza-price-medium"
                                  name="mediumPrice"
                                  value={values.mediumPrice}
                                  onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                  ) => {
                                    if (
                                      event.currentTarget.value === "" ||
                                      isNumber(event.currentTarget.value)
                                    ) {
                                      handleChange(event);
                                    }
                                  }}
                                  placeholder="Medium price"
                                  isValid={
                                    touched.mediumPrice && !errors.mediumPrice
                                  }
                                  isInvalid={!!errors.mediumPrice}
                                  style={{ resize: "none" }}
                                />
                              </Form.Group>
                            </>
                          ) : (
                            <>Medium: $ {Number(pizza.price[1]).toFixed(2)}</>
                          )}
                        </Col>
                        <Col xs="4" style={{ marginBottom: "20px" }}>
                          {isEditing ? (
                            <>
                              <Form.Group
                                style={{
                                  display: "flex",
                                  flexDirection: "row",
                                  alignItems: "center",
                                  margin: 0
                                }}
                              >
                                <Form.Control
                                  type="text"
                                  id="pizza-price-large"
                                  name="largePrice"
                                  value={values.largePrice}
                                  onChange={(
                                    event: React.ChangeEvent<HTMLInputElement>
                                  ) => {
                                    if (
                                      event.currentTarget.value === "" ||
                                      isNumber(event.currentTarget.value)
                                    ) {
                                      handleChange(event);
                                    }
                                  }}
                                  placeholder="Large price"
                                  isValid={
                                    touched.largePrice && !errors.largePrice
                                  }
                                  isInvalid={!!errors.largePrice}
                                  style={{ resize: "none" }}
                                />
                              </Form.Group>
                            </>
                          ) : (
                            <>Large: $ {Number(pizza.price[2]).toFixed(2)}</>
                          )}
                        </Col>
                      </Row>
                      {isEditing && (
                        <Row>
                          <Col>
                            <Button
                              variant="success"
                              type="submit"
                              style={{ width: "100%" }}
                            >
                              Confirm
                            </Button>
                          </Col>
                          <Col>
                            <Button
                              variant="secondary"
                              type="submit"
                              style={{ width: "100%" }}
                              onClick={(e: React.SyntheticEvent) => {
                                e.preventDefault();
                                setIsEditing(false);
                                resetForm();
                                setFile(initialFileState);
                              }}
                            >
                              Cancel
                            </Button>
                          </Col>
                          <Col />
                          <Col>
                            <Button
                              variant="danger"
                              type="submit"
                              style={{ width: "100%" }}
                              onClick={(e: React.SyntheticEvent) => {
                                e.preventDefault();
                                const deletedPizza: NewPizza = {
                                  id: values.id,
                                  name: values.name,
                                  img: values.img,
                                  size: values.size,
                                  price: [
                                    Number(values.smallPrice),
                                    Number(values.mediumPrice),
                                    Number(values.largePrice)
                                  ],
                                  ingredients: values.ingredients,
                                  description: values.description,
                                  createdAt: values.createdAt
                                };
                                // console.log(deletedPizza);
                                setIsEditing(false);
                                resetForm();
                                setFile(initialFileState);
                                dispatch(deleteNewPizza(deletedPizza));
                              }}
                            >
                              Delete
                            </Button>
                          </Col>
                        </Row>
                      )}
                      {!isEditing && (
                        <Row>
                          <Col>
                            <Button
                              onClick={() => {
                                setIsEditing(true);
                              }}
                            >
                              Edit Pizza
                            </Button>
                          </Col>
                        </Row>
                      )}
                    </Col>
                  </Row>
                </Form>
              </Container>
            </div>
          </div>
        </>
      )}
    </Formik>
  );
};

export { PizzaItem };
