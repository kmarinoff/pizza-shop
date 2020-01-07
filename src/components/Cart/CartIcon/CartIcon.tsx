import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
// import { ReactComponent as ShopingBagIcon } from "src/assets/shopping-bag.svg";
import "./CartIcon.scss";

const CartIcon: FC = () => {
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
      <span className="item-count">0</span>
    </div>
  );
};

export { CartIcon };
