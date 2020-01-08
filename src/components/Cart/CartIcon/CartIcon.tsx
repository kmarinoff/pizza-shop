import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import { useSelector } from "react-redux";
// import { ReactComponent as ShopingBagIcon } from "src/assets/shopping-bag.svg";
import "./CartIcon.scss";

const CartIcon: FC = () => {
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
    <div className="cart-icon">
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
