import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useWindowWidth } from "@react-hook/window-size";
import classNames from "classnames";
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
  const windowWidth = useWindowWidth();

  return (
    <>
      {totalCartValue !== 0 ? (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "calc(100vh)"
          }}
        >
          <Container fluid="md" className="mt-4 mb-4">
            <Row
              className="pb-2"
              style={{ display: windowWidth <= 581 ? "none" : "flex" }}
            >
              <div
                className={classNames(windowWidth <= 631 ? "col-3" : "col-4")}
              >
                Pizza
              </div>
              <div className="col-2">Name</div>
              <div className="col-2">Quantity</div>
              <div
                className={classNames(
                  windowWidth <= 631 ? "col-3" : "col-2",
                  "text-center"
                )}
              >
                Price
              </div>
              <div className="col-2">Remove</div>
            </Row>
            <Row
              className="checkout-items-container"
              style={{
                maxHeight: windowWidth <= 581 ? "320px" : "415px",
                overflow: "auto",
                borderBottom: "1px solid black",
                borderTop: "1px solid black"
              }}
            >
              {cart.map((cartItem: CartItem) => (
                <CheckoutItem
                  key={`${cartItem.id}-${cartItem.size}`}
                  cartItem={cartItem}
                />
              ))}
            </Row>
            <Row className="pt-2 justify-content-end align-items-center">
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
          <Footer />
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "calc(100vh)"
          }}
        >
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
          <Footer />
        </div>
      )}
    </>
  );
};

export { Checkout };
