import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import _ from "lodash";
import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { BetterButton } from "src/components";
import { removeFromCart } from "src/reduxStore";
import { totalCartPrice } from "src/utils";
import "./ShoppingCartDropdown.scss";

import { CartItem, IRootState } from "src/types";

interface ShoppingCartDropdownProps {
  handleClick: () => void;
}

const ShoppingCartDropdown: FC<ShoppingCartDropdownProps> = ({
  handleClick
}) => {
  const cart: CartItem[] = useSelector((state: IRootState) => state.cart.cart);
  const dispatch = useDispatch();
  const history = useHistory();
  const totalCartValue = totalCartPrice(cart);

  return (
    <div className="cart-dropdown">
      <div
        className="cart-items"
        style={{ overflowY: cart.length !== 0 ? "scroll" : "visible" }}
      >
        {cart.length !== 0 ? (
          <>
            {cart.map((item: CartItem) => (
              <div
                key={`${item.id}-${item.size}`}
                className="d-flex flex-row justify-content-between my-1 mx-2 align-items-center"
              >
                <div
                  style={{ width: "100%" }}
                  className="d-flex justify-content-between align-items-center"
                >
                  <div className="d-flex flex-column">
                    <div>
                      {_.startCase(_.toLower(item.name))}
                      {" - "}
                      {item.size === 0 ? "S" : item.size === 1 ? "M" : "L"}
                    </div>
                    <div>Count: {item.count}</div>
                  </div>
                  <div style={{ fontSize: "0.8em" }} className="mr-2">
                    {item.count === 1
                      ? item.price
                      : (item.price * item.count).toFixed(2)}{" "}
                    $
                  </div>
                </div>
                <BetterButton
                  buttonText="&#10005;"
                  bsPrefix="remove-from-cart-btn"
                  buttonStyles={{ padding: "5px 10px" }}
                  onClick={() => {
                    dispatch(removeFromCart(item));
                  }}
                />
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
        <div style={{ textAlign: "end", margin: "5px" }}>
          Total: {totalCartValue.toFixed(2)} $
        </div>
      )}

      {cart.length !== 0 && (
        <BetterButton
          buttonText="GO TO CHECKOUT"
          bsPrefix="go-to-checkout-btn"
          //  buttonStyles={{ padding: "10px 15px" }}
          onClick={() => {
            history.push("/checkout");
            handleClick();
          }}
        ></BetterButton>
      )}
    </div>
  );
};

export { ShoppingCartDropdown };
