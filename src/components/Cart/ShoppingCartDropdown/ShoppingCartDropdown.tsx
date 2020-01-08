import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "src/reduxStore";
import "./ShoppingCartDropdown.scss";

const ShoppingCartDropdown: FC = () => {
  const cart: any[] = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cart.length !== 0 ? (
          <>
            {cart.map((item: any) => (
              <div
                key={item.id}
                className="d-flex flex-row justify-content-between my-1 mx-2"
              >
                <div className="d-flex flex-column">
                  <div>{item.name}</div>
                  <div>Count: {item.count}</div>
                </div>
                <Button
                  onClick={() => {
                    dispatch(removeFromCart(item));
                  }}
                >
                  X
                </Button>
              </div>
            ))}
          </>
        ) : (
          <div
            className="d-flex justify-content-center align-items-center flex-column"
            style={{ width: "100%", height: "100%" }}
          >
            <FontAwesomeIcon
              className="shopping-cart"
              style={{
                fontSize: "2.63em",
                fontStyle: "bold",
                color: "rgba(0,0,0,0.2)"
              }}
              icon={faShoppingCart}
            />
            <p style={{ marginTop: "20px", marginBottom: "0px" }}>
              Shopping cart is empty.
            </p>
          </div>
        )}
      </div>
      <Button disabled={cart.length === 0}>GO TO CHECKOUT</Button>
    </div>
  );
};

export { ShoppingCartDropdown };
