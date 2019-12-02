import React, { FC } from "react";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "src/reduxStore";

const Cart: FC = () => {
  const dispatch = useDispatch();
  const cart: any[] = useSelector((state: any) => state.cart);

  return (
    <>
      {cart.length !== 0 && (
        <div>
          <h1>Cart:</h1>
          {cart.map((item: any) => (
            <div key={item.id}>
              {item.name}
              {item.count}
              <Button
                onClick={() => {
                  dispatch(removeFromCart(item));
                }}
              >
                Remove From Cart
              </Button>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export { Cart };
