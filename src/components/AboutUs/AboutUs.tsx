import {
  faCar,
  faCoffee,
  faLaptop,
  faQuoteLeft,
  faQuoteRight,
  faUtensils
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

const AboutUs = () => {
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
            About Us
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
          Nulla non mattis risus. Praesent accumsan at diam ut molestie. Non
          mattis risus. Praesent accumsan at diam ut molestie. Vivamus est
          mauris, rutrum sed sollicitudin id, semper vel justo. Donec vitae
          magna elementum, tempus ante in, aliquam nibh.
        </div>
      </div>
      <Container fluid style={{ width: "70%" }}>
        <Row
          style={{
            textAlign: "center",
            fontFamily: "Fira Sans",
            paddingBottom: "73px"
          }}
        >
          <Col>
            <FontAwesomeIcon
              className="laptop"
              style={{
                fontSize: "4em",
                fontStyle: "bold",
                color: "#A0CE54B3"
              }}
              icon={faLaptop}
            />
            <div
              style={{
                fontWeight: "bold",
                marginTop: "40px",
                color: "#222222"
              }}
            >
              Pellentesque porta
            </div>
            <div
              className="line"
              style={{
                width: "50px",
                borderBottom: "3px solid #a0ce54b3",
                margin: "10px auto"
              }}
            />
            <div style={{ color: "#323232" }}>
              Aliquam tincidunt mattis venenatis. Sed molestie lacus ac urna
              lobortis, non hendrerit magna convallis.
            </div>
          </Col>
          <Col>
            <FontAwesomeIcon
              className="car"
              style={{
                fontSize: "4em",
                fontStyle: "bold",
                color: "#A0CE54B3"
              }}
              icon={faCar}
            />
            <div
              style={{
                fontWeight: "bold",
                marginTop: "40px",
                color: "#222222"
              }}
            >
              Pellentesque porta
            </div>
            <div
              className="line"
              style={{
                width: "50px",
                borderBottom: "3px solid #a0ce54b3",
                margin: "10px auto"
              }}
            />
            <div style={{ color: "#323232" }}>
              Aliquam tincidunt mattis venenatis. Sed molestie lacus ac urna
              lobortis, non hendrerit magna convallis.
            </div>
          </Col>
          <Col>
            <FontAwesomeIcon
              className="utensils"
              style={{
                fontSize: "4em",
                fontStyle: "bold",
                color: "#A0CE54B3"
              }}
              icon={faUtensils}
            />
            <div
              style={{
                fontWeight: "bold",
                marginTop: "40px",
                color: "#222222"
              }}
            >
              Pellentesque porta
            </div>
            <div
              className="line"
              style={{
                width: "50px",
                borderBottom: "3px solid #a0ce54b3",
                margin: "10px auto"
              }}
            />
            <div style={{ color: "#323232" }}>
              Aliquam tincidunt mattis venenatis. Sed molestie lacus ac urna
              lobortis, non hendrerit magna convallis.
            </div>
          </Col>
          <Col>
            <FontAwesomeIcon
              className="coffee"
              style={{
                fontSize: "4em",
                fontStyle: "bold",
                color: "#A0CE54B3"
              }}
              icon={faCoffee}
            />
            <div
              style={{
                fontWeight: "bold",
                marginTop: "40px",
                color: "#222222"
              }}
            >
              Pellentesque porta
            </div>
            <div
              className="line"
              style={{
                width: "50px",
                borderBottom: "3px solid #a0ce54b3",
                margin: "10px auto"
              }}
            />
            <div style={{ color: "#323232" }}>
              Aliquam tincidunt mattis venenatis. Sed molestie lacus ac urna
              lobortis, non hendrerit magna convallis.
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export { AboutUs };
