/* eslint jsx-a11y/no-static-element-interactions: off, jsx-a11y/click-events-have-key-events: off */

import "./CartIcon.scss";

import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import { CartItem, IRootState } from "src/types";

interface CartIconProps {
  handleClick: () => void;
}

const CartIcon: FC<CartIconProps> = ({ handleClick }) => {
  const cart: CartItem[] = useSelector((state: IRootState) => state.cart.cart);

  const totalCartItems = cart.reduce((accumulator: number, currentItem) => {
    return accumulator + currentItem.count;
  }, 0);

  return (
    <div className="cart-icon" onClick={handleClick}>
      <FontAwesomeIcon
        className="shopping-cart"
        style={{
          fontSize: "2.63em",
          fontStyle: "bold",
          color: "white",
        }}
        icon={faShoppingCart}
      />
      <span className="item-count">{totalCartItems}</span>
    </div>
  );
};

export { CartIcon };
