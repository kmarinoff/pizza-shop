import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { removeFromCart } from "src/reduxStore";
import { totalCartPrice } from "src/utils";
import "./ShoppingCartDropdown.scss";

interface ShoppingCartDropdownProps {
  handleClick: () => void;
}

const ShoppingCartDropdown: FC<ShoppingCartDropdownProps> = ({
  handleClick
}) => {
  const cart: any[] = useSelector((state: any) => state.cart);
  const dispatch = useDispatch();
  const history = useHistory();
  const totalCartValue = totalCartPrice(cart);

  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cart.length !== 0 ? (
          <>
            {cart.map((item: any) => (
              <div
                key={item.id}
                className="d-flex flex-row justify-content-between my-1 mx-2 align-items-center"
              >
                <div
                  style={{ width: "100%" }}
                  className="d-flex justify-content-between align-items-center"
                >
                  <div className="d-flex flex-column">
                    <div>{item.name}</div>
                    <div>Count: {item.count}</div>
                  </div>
                  <div style={{ fontSize: "0.8em" }} className="mr-2">
                    {item.count === 1
                      ? item.price
                      : (item.price * item.count).toFixed(2)}{" "}
                    $
                  </div>
                </div>
                <Button
                  className="m-0"
                  onClick={() => {
                    dispatch(removeFromCart(item));
                  }}
                >
                  &#10005;
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
      {cart.length !== 0 && (
        <Button
          disabled={cart.length === 0}
          onClick={() => {
            history.push("/checkout");
            handleClick();
          }}
        >
          <div>GO TO CHECKOUT</div>
          <div>Total: {totalCartValue.toFixed(2)} $</div>
        </Button>
      )}
    </div>
  );
};

export { ShoppingCartDropdown };
