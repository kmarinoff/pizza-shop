import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { FC } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector } from "react-redux";
import { StripeButton } from "src/components";
import { Footer } from "src/pages/components";
import { totalCartPrice } from "src/utils";
import { CheckoutItem } from "../CheckoutItem";

import { CartItem, IRootState } from "src/types";

import "./styles.scss";

const Checkout: FC = () => {
  const cart: CartItem[] = useSelector((state: IRootState) => state.cart.cart);
  const totalCartValue = totalCartPrice(cart);

  return (
    <>
      {totalCartValue !== 0 ? (
        <Container
          fluid="md"
          className="mt-4"
          style={{ height: "calc(100vh - 56px - 1.5rem - 100px)" }}
        >
          <Row className="pb-2" style={{ borderBottom: "1px solid black" }}>
            <div className="col-4">Pizza</div>
            <div className="col-2">Name</div>
            <div className="col-2">Quantity</div>
            <div className="col-2">Price</div>
            <div className="col-2">Remove</div>
          </Row>
          <Row
            className="checkout-items-container"
            style={{ height: "415px", overflow: "auto" }}
          >
            {cart.map((cartItem: CartItem) => (
              <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
          </Row>
          <Row
            className="pt-2 justify-content-end align-items-center"
            style={{ borderTop: "1px solid black" }}
          >
            <Col className="font-weight-bold text-right">
              Total: {totalCartValue.toFixed(2)} $
            </Col>
            <Col xs="auto">
              <StripeButton price={totalCartValue} />
            </Col>
          </Row>
          <div className="test-warning">
            *Please use the following test credit card for payments
            <br />
            4242 4242 4242 4242 - Exp 01/25 - CVC: 123
          </div>
        </Container>
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
