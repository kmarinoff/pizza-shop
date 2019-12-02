import get from "lodash/get";
import React, { FC } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart } from "src/reduxStore";
import { Pizza } from "src/types";

interface PizzaListItemProps {
  pizza: Pizza;
}

const PizzaListItem: FC<PizzaListItemProps> = ({ pizza }) => {
  const dispatch = useDispatch();

  return (
    <>
      <Card style={{ width: "18rem", margin: "10px 10px" }}>
        <Card.Img variant="top" src="https://via.placeholder.com/286x180" />
        <Card.Body>
          <Card.Title>
            <Link to={`/home/pizza/${pizza.id}`}>
              <h2 style={{ textAlign: "center" }}>{get(pizza, "name")}</h2>
            </Link>
          </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <div className="d-flex justify-content-between align-items-center">
            <p style={{ margin: 0 }}>Cost: ${get(pizza, "price")}</p>
            <Button
              style={{ alignSelf: "flex-end" }}
              onClick={() => {
                dispatch(addToCart(pizza));
              }}
            >
              Add To Cart
            </Button>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export { PizzaListItem };
