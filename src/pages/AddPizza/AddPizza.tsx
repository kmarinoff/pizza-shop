import React, { ChangeEvent, SyntheticEvent } from "react";

import isNumber from "is-number";
import { Button, Form } from "react-bootstrap";
import CreatableSelect from "react-select/creatable";

import { Base64 } from "js-base64";
import { firestore } from "src/setup";

import { toast } from "react-toastify";

const AddPizza: React.FC = () => {
  const initialPizzaState = {
    name: "",
    img: "",
    ingredients: [],
    price: ["", "", ""],
    description: ""
  };

  const [pizza, setPizza] = React.useState<{
    name: string;
    img: string;
    ingredients: string[];
    price: string[];
    description: string;
  }>(initialPizzaState);

  const initialFileState = { preview: "", raw: undefined };

  const [file, setFile] = React.useState<{
    preview: string;
    raw?: File;
  }>(initialFileState);

  const [reactSelectValues, setReactSelectValues] = React.useState<
    Array<{ label: string; value: string }>
  >([]);

  const [isValid, setIsValid] = React.useState<boolean>(true);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);

  const handleIngredientsChange = (newValue: any, actionMeta: any) => {
    if (newValue !== null) {
      const ingredients = newValue.map(
        (item: { label: string; value: string }) => item.value
      );
      setPizza({ ...pizza, ingredients });
      setReactSelectValues([...newValue]);
    } else {
      setReactSelectValues([]);
      setPizza({ ...pizza, ingredients: [] });
      setFile(initialFileState);
    }
  };

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    try {
      if (event.target.files) {
        const type = event.target.files[0].type;

        setFile({
          preview: URL.createObjectURL(event.target.files[0]),
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

              setPizza({
                ...pizza,
                img: `data:${type};base64,${encodedBase64Image}`
              });
            }
          })
          .catch(error => {
            console.log(error);
          });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const timeOut = () => {
    setIsValid(false);
    setTimeout(() => {
      setIsValid(true);
    }, 1000);
  };

  const handleSubmit = (e: SyntheticEvent) => {
    e.preventDefault();
    // console.log("New Pizza:", pizza);

    if (pizza.name === "") {
      toast.error("Fill out pizza name");
      timeOut();
      return;
    }

    if (reactSelectValues.length === 0) {
      toast.error("Fill out at least one pizza ingredient");
      timeOut();
      return;
    }

    if (pizza.price[0] === "") {
      toast.error("Fill out the small pizza price");
      timeOut();
      return;
    }

    if (pizza.price[1] === "") {
      toast.error("Fill out the medium pizza price");
      timeOut();
      return;
    }

    if (pizza.price[2] === "") {
      toast.error("Fill out the large pizza price");
      timeOut();
      return;
    }

    if (pizza.description === "") {
      toast.error("Fill out a description fot the pizza");
      timeOut();
      return;
    }

    if (file.raw === undefined) {
      toast.error("Please, select an image for the pizza");
      return;
    }

    setIsValid(true);
    setIsLoading(true);
    firestore
      .collection("pizzas")
      .add({ ...pizza, createdAt: new Date() })
      .then(result => {
        // console.log(result);
        // console.log("Pizza added successfully!");
        toast.success("Pizza added successfully!");

        // Clear Form
        setIsLoading(false);
        setPizza(initialPizzaState);
        setReactSelectValues([]);
        setFile(initialFileState);
      })
      .catch(error => {
        // console.log("Error on adding a new pizza!", error);
        toast.error("Error on adding a new pizza!");
      });
  };

  // React.useEffect(() => {
  //   console.log(file);
  // }, [file]);
  //
  // React.useEffect(() => {
  //   console.log(pizza);
  // }, [pizza]);

  return (
    <div>
      <Form onSubmit={handleSubmit} style={{ margin: "5px" }}>
        <Form.Group>
          <Form.Label>Pizza Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter pizza name"
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setPizza({ ...pizza, name: event.currentTarget.value });
            }}
            value={pizza.name}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Pizza Ingredients</Form.Label>
          <CreatableSelect
            isMulti
            onChange={handleIngredientsChange}
            value={reactSelectValues}
            noOptionsMessage={() => {
              return "Type an ingredient ...";
            }}
          />
        </Form.Group>
        <Form.Group style={{ display: "flex", flexDirection: "row" }}>
          <div className="small-price">
            <Form.Label>Small Price</Form.Label>
            <Form.Control
              type="text"
              placeholder="Small price"
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                if (
                  event.currentTarget.value === "" ||
                  isNumber(event.currentTarget.value)
                ) {
                  const pizzaPriceArray = pizza.price;
                  pizzaPriceArray[0] = event.currentTarget.value;
                  setPizza({ ...pizza, price: pizzaPriceArray });
                } else {
                  // console.log("Enter a valid price!");
                }
              }}
              value={pizza.price[0]}
            />
          </div>
          <div className="medium-price" style={{ margin: "0 5px" }}>
            <Form.Label>Medium Price</Form.Label>
            <Form.Control
              type="text"
              placeholder="Medium price"
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                if (
                  event.currentTarget.value === "" ||
                  isNumber(event.currentTarget.value)
                ) {
                  const pizzaPriceArray = pizza.price;
                  pizzaPriceArray[1] = event.currentTarget.value;
                  setPizza({ ...pizza, price: pizzaPriceArray });
                } else {
                  // console.log("Enter a valid price!");
                }
              }}
              value={pizza.price[1]}
            />
          </div>
          <div className="large-price">
            <Form.Label>Large Price</Form.Label>
            <Form.Control
              type="text"
              placeholder="Large price"
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                if (
                  event.currentTarget.value === "" ||
                  isNumber(event.currentTarget.value)
                ) {
                  const pizzaPriceArray = pizza.price;
                  pizzaPriceArray[2] = event.currentTarget.value;
                  setPizza({ ...pizza, price: pizzaPriceArray });
                } else {
                  // console.log("Enter a valid price!");
                }
              }}
              value={pizza.price[2]}
            />
          </div>
        </Form.Group>
        <Form.Group>
          <Form.Label>Pizza Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Pizza Description"
            onChange={(event: ChangeEvent<HTMLInputElement>) => {
              setPizza({ ...pizza, description: event.currentTarget.value });
            }}
            value={pizza.description}
          />
        </Form.Group>
        <Form.Group>
          <Form.File id="pizza-img-file" custom>
            <Form.File.Label>
              {file.raw !== undefined
                ? file.raw?.name
                : "Select pizza image ..."}
            </Form.File.Label>
            <Form.File.Input
              onChange={(event: ChangeEvent<HTMLInputElement>) => {
                if (event.target.files && event.target.files.length > 0) {
                  const fileType = event.target.files[0].type;

                  if (fileType === "image/jpeg" || fileType === "image/png") {
                    handleImageChange(event);
                  } else {
                    // console.log("File type not supported!");
                    toast.error("File type not supported");
                    setFile({ preview: "", raw: undefined });
                  }
                }
              }}
            />
          </Form.File>
        </Form.Group>
        <Form.Group style={{ display: "flex", justifyContent: "flex-end" }}>
          <Button
            variant="primary"
            type="submit"
            disabled={isLoading || !isValid}
          >
            Submit Pizza
          </Button>
        </Form.Group>
      </Form>
    </div>
  );
};

export { AddPizza };
