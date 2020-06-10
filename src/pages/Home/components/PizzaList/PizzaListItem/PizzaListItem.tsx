import get from "lodash/get";
import React, { FC } from "react";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { BetterButton } from "src/components";
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
        <Card.Img variant="top" src={get(pizza, "img")} />
        <Card.Body>
          <Card.Title>
            <Link to={`/pizza/${pizza.id}`} style={{ color: "#77b510" }}>
              <h2 style={{ textAlign: "center", color: "#A0CE54" }}>
                {get(pizza, "name")}
              </h2>
            </Link>
          </Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <div className="d-flex justify-content-between align-items-center">
            <p style={{ margin: 0 }}>Cost: ${get(pizza, "price")}</p>
            <BetterButton
              buttonText="Add To Cart"
              bsPrefix="add-to-cart-btn"
              onClick={() => {
                dispatch(addToCart(pizza));
              }}
            />
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export { PizzaListItem };
