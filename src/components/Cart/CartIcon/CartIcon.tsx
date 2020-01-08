import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import "./CartIcon.scss";

interface CartIconProps {
  handleClick: () => void;
}

const CartIcon: FC<CartIconProps> = ({ handleClick }) => {
  const cart: any[] = useSelector((state: any) => state.cart);

  const totalCartItems = cart.reduce(
    (
      accumulator: number,
      currentItem: { id: number; name: string; price: number; count: number }
    ) => {
      return accumulator + currentItem.count;
    },
    0
  );

  return (
    <div className="cart-icon" onClick={handleClick}>
      <FontAwesomeIcon
        className="shopping-cart"
        style={{
          fontSize: "2.63em",
          fontStyle: "bold",
          color: "white"
        }}
        icon={faShoppingCart}
      />
      <span className="item-count">{totalCartItems}</span>
    </div>
  );
};

export { CartIcon };
