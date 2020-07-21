import _ from "lodash";
import get from "lodash/get";
import React, { FC } from "react";
import { Dropdown } from "react-bootstrap";
import Card from "react-bootstrap/Card";
import { useDispatch } from "react-redux";
// import { Link } from "react-router-dom";
import { BetterButton } from "src/components";
import { addToCart } from "src/reduxStore";
import { CartItem } from "src/types";
import { NewPizza } from "src/types/newPizza";

interface PizzaListItemProps {
  pizza: NewPizza;
}

const PizzaListItem: FC<PizzaListItemProps> = ({ pizza }) => {
  const dispatch = useDispatch();

  const [size, setSize] = React.useState(0);

  return (
    <>
      <Card style={{ width: "21rem", margin: "10px 10px" }}>
        <Card.Img variant="top" src={get(pizza, "img")} />
        <Card.Body>
          <Card.Title>
            {/* <Link to={`/pizza/${pizza.id}`} style={{ color: "#77b510" }}> */}
            <h2 style={{ textAlign: "center", color: "#A0CE54" }}>
              {_.startCase(_.toLower(get(pizza, "name")))}
            </h2>
            {/* </Link> */}
          </Card.Title>
          <Card.Text>{pizza.description}</Card.Text>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "justify-content-between",
              alignItems: "center",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "justify-content-between",
                alignItems: "center",
                flexWrap: "wrap",
                marginBottom: "1rem",
              }}
            >
              <span style={{ fontStyle: "italic" }}>Ingredients:&nbsp;</span>
              {pizza.ingredients.map((ingredient: string, idx: number) => {
                if (pizza.ingredients.length !== idx + 1) {
                  return <span key={idx}>{ingredient},&nbsp;</span>;
                }
                return <span key={idx}>{ingredient}</span>;
              })}
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
                marginBottom: "1rem",
              }}
            >
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  {size === 0
                    ? `Small: $ ${Number(pizza.price[0]).toFixed(2)}`
                    : size === 1
                    ? `Medium: $ ${Number(pizza.price[1]).toFixed(2)}`
                    : `Large: $ ${Number(pizza.price[2]).toFixed(2)}`}
                </Dropdown.Toggle>

                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={() => {
                      setSize(0);
                    }}
                  >
                    Small: $ {Number(pizza.price[0]).toFixed(2)}
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      setSize(1);
                    }}
                  >
                    Medium: $ {Number(pizza.price[1]).toFixed(2)}
                  </Dropdown.Item>
                  <Dropdown.Item
                    onClick={() => {
                      setSize(2);
                    }}
                  >
                    Large: $ {Number(pizza.price[2]).toFixed(2)}
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <BetterButton
                buttonText="Add To Cart"
                bsPrefix="add-to-cart-btn"
                onClick={() => {
                  const pizzaToAdd: CartItem = {
                    id: pizza.id,
                    count: 1,
                    img: pizza.img,
                    name: pizza.name,
                    price: pizza.price[size],
                    size,
                  };

                  dispatch(addToCart(pizzaToAdd));
                }}
              />
            </div>
          </div>
        </Card.Body>
      </Card>
    </>
  );
};

export { PizzaListItem };
