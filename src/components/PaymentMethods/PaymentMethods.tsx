import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

import mastercarad from "src/assets/payment-methods/mastercarad-small.png";
import paypal from "src/assets/payment-methods/paypal.png";
import stripe from "src/assets/payment-methods/stripe-small.png";
import visa from "src/assets/payment-methods/visa.png";

import "./styles.scss";

const PaymentMethods = () => {
  return (
    <>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          // margin: "0 auto 50px auto",
          margin: "0 auto",
          width: "50%",
          textAlign: "center",
          padding: "73px 0"
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <FontAwesomeIcon
            className="shopping-cart"
            style={{
              fontSize: "1.3em",
              fontStyle: "bold",
              color: "#ccc"
            }}
            icon={faQuoteLeft}
          />
          <div
            style={{
              color: "333",
              fontFamily: "Droid Serif",
              fontStyle: "italic",
              fontSize: "2em",
              margin: "5px 20px"
            }}
          >
            Payment methods
          </div>
          <FontAwesomeIcon
            className="shopping-cart"
            style={{
              fontSize: "1.3em",
              fontStyle: "bold",
              color: "#ccc"
            }}
            icon={faQuoteRight}
          />
        </div>
        <div
          style={{
            color: "#A8A8A8",
            fontStyle: "italic",
            fontSize: "0.9em"
          }}
        >
          Donec vitae magna elementum, tempus ante in, aliquam nibh.
        </div>
      </div>
      <Container fluid style={{ width: "70%" }}>
        <Row
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            textAlign: "center"
          }}
        >
          <Col lg={3} md={6} sm={6} xs={12} style={{ marginBottom: "80px" }}>
            <Image className="payment-logo" src={paypal} fluid />
          </Col>

          <Col lg={3} md={6} sm={6} xs={12} style={{ marginBottom: "80px" }}>
            <Image className="payment-logo" src={mastercarad} fluid />
          </Col>

          <Col lg={3} md={6} sm={6} xs={12} style={{ marginBottom: "80px" }}>
            <Image className="payment-logo" src={visa} fluid />
          </Col>

          <Col lg={3} md={6} sm={6} xs={12} style={{ marginBottom: "80px" }}>
            <Image className="payment-logo" src={stripe} fluid />
          </Col>
        </Row>
      </Container>
    </>
  );
};

export { PaymentMethods };
