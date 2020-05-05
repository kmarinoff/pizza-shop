import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { Footer, StripeButton } from "src/components";
import { addToCart, removeFromCart } from "src/reduxStore";
import { CartItem } from "src/types";
import { totalCartPrice } from "src/utils";
import "./styles.scss";

const Checkout: FC = () => {
  const dispatch = useDispatch();
  const cart: CartItem[] = useSelector((state: any) => state.cart);
  const totalCartValue = totalCartPrice(cart);

  return (
    <>
      {totalCartValue !== 0 ? (
        <div
          className="container mt-4"
          style={{ height: "calc(100vh - 56px - 1.5rem - 100px)" }}
        >
          <div className="row pb-2" style={{ borderBottom: "1px solid black" }}>
            <div className="col-4">Pizza</div>
            <div className="col-2">Name</div>
            <div className="col-2">Quantity</div>
            <div className="col-2">Price</div>
            <div className="col-2">Remove</div>
          </div>
          <div className="row my-2">
            {cart.map((cartItem: CartItem) => (
              <React.Fragment key={cartItem.id}>
                <div className="my-2 col-4 d-flex align-items-center">
                  Imagine a picture here
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
                  <Button
                    className="m-0"
                    onClick={() => {
                      dispatch(removeFromCart(cartItem));
                    }}
                  >
                    &#10005;
                  </Button>
                </div>
              </React.Fragment>
            ))}
          </div>
          <div
            className="row pt-2 justify-content-end align-items-center"
            style={{ borderTop: "1px solid black" }}
          >
            <div className="col-2 font-weight-bold">
              Total: {totalCartValue.toFixed(2)} $
            </div>
            <StripeButton price={totalCartValue} />
          </div>
          <div className="test-warning">
            *Please use the following test credit card for payments
            <br />
            4242 4242 4242 4242 - Exp 01/25 - CVC: 123
          </div>
        </div>
      ) : (
        <div style={{ height: "calc(100vh - 56px - 1.5rem - 100px)" }}>
          <div
            className="container mt-4"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
              borderTop: "1px solid black",
              borderBottom: "1px solid black",
              padding: "30px 0"
            }}
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
            <h1 style={{ textAlign: "center" }}>No Items In Cart</h1>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
};

export { Checkout };
