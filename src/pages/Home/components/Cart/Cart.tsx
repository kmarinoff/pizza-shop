import React, { FC } from "react";
import { useSelector } from "react-redux";

const Cart: FC = () => {
  const cart: any[] = useSelector((state: any) => state.cart);

  return (
    <>
      {cart.length !== 0 && (
        <div>
          <h1>Cart:</h1>
          {cart.map((item: any) => (
            <div key={item.id}>{item.name}</div>
          ))}
        </div>
      )}
    </>
  );
};

export { Cart };
