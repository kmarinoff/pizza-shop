import React, { FC } from "react";
import Button from "react-bootstrap/Button";
import "./ShoppingCartDropdown.scss";

const ShoppingCartDropdown: FC = () => {
  return (
    <div className="cart-dropdown">
      <div className="cart-items"></div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  );
};

export { ShoppingCartDropdown };
