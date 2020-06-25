import { useWindowWidth } from "@react-hook/window-size";
import classNames from "classnames";
import get from "lodash/get";
import React from "react";
import { BetterButton } from "src/components/BetterButton";

import { useDispatch } from "react-redux";
import {
  addToCart,
  removeFromCart,
  removeItemTypeFromCart
} from "src/reduxStore/modules/cart";

import { CartItem } from "src/types";

interface CheckoutItemProps {
  cartItem: CartItem;
}

const CheckoutItem: React.FC<CheckoutItemProps> = ({ cartItem }) => {
  const dispatch = useDispatch();
  const windowWidth = useWindowWidth();

  return (
    <>
      <div
        style={{ justifyContent: windowWidth <= 581 ? "center" : "flex-start" }}
        className={classNames(
          "my-2",
          windowWidth <= 581 ? "col-6" : windowWidth <= 631 ? "col-3" : "col-4",
          "d-flex",
          "align-items-center"
        )}
      >
        <img
          style={
            {
              // width:
              //   windowWidth <= 581 ? "70%" : windowWidth <= 631 ? "100%" : "200"
              // height: windowWidth <= 631 ? "60" : "120"
            }
          }
          // width={
          //   windowWidth <= 581 ? "70%" : windowWidth <= 631 ? "100%" : "200"
          // }
          height={windowWidth <= 631 ? "60" : "120"}
          src={get(cartItem, "img")}
          alt="pizzaImage"
        />
      </div>
      <div
        style={{ justifyContent: windowWidth <= 581 ? "center" : "flex-start" }}
        className={classNames(
          "my-2",
          windowWidth <= 581 ? "col-6" : "col-2",
          "d-flex",
          "align-items-center"
        )}
      >
        {cartItem.name}
      </div>
      <div
        style={{
          justifyContent: windowWidth <= 581 ? "center" : "flex-start",
          marginBottom: windowWidth <= 581 ? "1.5rem" : "0.5rem"
        }}
        className={classNames(
          "mt-2",
          windowWidth <= 581 ? "col-4" : "col-2",
          "d-flex",
          "align-items-center"
        )}
      >
        <>
          <button
            style={{ border: "none", backgroundColor: "transparent" }}
            onClick={() => {
              dispatch(removeFromCart(cartItem));
            }}
          >
            <span>&#10094;</span>
          </button>
          <span style={{ margin: "0 5px" }}>{cartItem.count}</span>
          <button
            style={{ border: "none", backgroundColor: "transparent" }}
            onClick={() => {
              dispatch(addToCart(cartItem));
            }}
          >
            <span>&#10095;</span>
          </button>
        </>
      </div>
      <div
        className={classNames(
          "mt-2",
          windowWidth <= 581 ? "col-4" : windowWidth <= 631 ? "col-3" : "col-2",
          "d-flex",
          "align-items-center",
          "justify-content-center"
        )}
        style={{
          justifyContent: windowWidth <= 581 ? "center" : "flex-start",
          marginBottom: windowWidth <= 581 ? "1.5rem" : "0.5rem"
        }}
      >
        {cartItem.price} $
      </div>
      <div
        className={classNames(
          "mt-2",
          windowWidth <= 581 ? "col-4" : "col-2",
          "d-flex",
          "align-items-center"
        )}
        style={{
          justifyContent: windowWidth <= 581 ? "center" : "flex-start",
          marginBottom: windowWidth <= 581 ? "1.5rem" : "0.5rem"
        }}
      >
        <BetterButton
          buttonText="&#10005;"
          bsPrefix="remove-from-cart-btn"
          buttonStyles={{ padding: "10px 15px" }}
          onClick={() => {
            dispatch(removeItemTypeFromCart(cartItem));
          }}
        />
      </div>
    </>
  );
};

export { CheckoutItem };
