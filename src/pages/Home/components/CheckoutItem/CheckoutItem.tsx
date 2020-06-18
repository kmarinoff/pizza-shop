import get from "lodash/get";
import React from "react";
import { BetterButton } from "src/components/BetterButton";

import { useDispatch } from "react-redux";
import { addToCart, removeFromCart } from "src/reduxStore/modules/cart";

import { CartItem } from "src/types";

interface CheckoutItemProps {
  cartItem: CartItem;
}

const CheckoutItem: React.FC<CheckoutItemProps> = ({ cartItem }) => {
  const dispatch = useDispatch();
  return (
    <>
      <div className="my-2 col-4 d-flex align-items-center">
        <img
          width="200"
          height="120"
          src={get(cartItem, "img")}
          alt="pizzaImage"
        />
      </div>
      <div className="my-2 col-2 d-flex align-items-center">
        {cartItem.name}
      </div>
      <div className="my-2 col-2 d-flex align-items-center">
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
      <div className="my-2 col-2 d-flex align-items-center">
        {cartItem.price} $
      </div>
      <div className="my-2 col-2 d-flex align-items-center">
        <BetterButton
          buttonText="&#10005;"
          bsPrefix="remove-from-cart-btn"
          buttonStyles={{ padding: "10px 15px" }}
          onClick={() => {
            dispatch(removeFromCart(cartItem));
          }}
        />
      </div>
    </>
  );
};

export { CheckoutItem };
