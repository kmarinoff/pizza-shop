import React from "react";

import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import oneBlockBackground from "src/assets/one-block/one-block-bg.jpg";

import "./styles.scss";

const OneBlock = () => {
  return (
    <div
      style={{
        padding: "73px 0",
        background: `url(${oneBlockBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "Fira Sans, sans-serif"
      }}
    >
      <Container>
        <Row
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
          }}
        >
          <Col
            md={10}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              color: "white"
            }}
          >
            <div style={{ fontWeight: "bold", marginBottom: "20px" }}>
              Praesent et ultricies velit.
            </div>
            <div style={{ fontWeight: 200, marginBottom: "20px" }}>
              Proin dapibus luctus quam, placerat volutpat tortor dapibus vel.
              <br />
              Duis interdum elit quis venenatis bibendum. Nulla malesuada purus
              eget nunc efficitur.
            </div>
          </Col>
          <Col md={2}>
            <div className="one-block-btn-container">
              <Button
                type="submit"
                bsPrefix="one-block-btn"
                style={{ flexGrow: 1 }}
              >
                Our Products
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export { OneBlock };
