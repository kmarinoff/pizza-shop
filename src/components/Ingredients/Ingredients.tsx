import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import ingredientsBackground from "src/assets/ingredients/ingredients-bg.jpg";

import ingredientOne from "src/assets/ingredients/1-ingredient.jpg";
import ingredientTwo from "src/assets/ingredients/2-ingredient.jpg";
import ingredientThree from "src/assets/ingredients/3-ingredient.jpg";
import ingredientFour from "src/assets/ingredients/4-ingredient.jpg";

import { useWindowWidth } from "@react-hook/window-size";

const Ingredients: React.FC = () => {
  const windowWidth = useWindowWidth();

  return (
    <div
      style={{
        padding: "73px 0",
        background: `url(${ingredientsBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center"
      }}
    >
      <div className="container">
        <div
          className="header"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            marginBottom: "80px"
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <FontAwesomeIcon
              className="shopping-cart"
              style={{
                fontSize: "1.3em",
                fontStyle: "bold",
                color: "#CA934C"
              }}
              icon={faQuoteLeft}
            />
            <div
              style={{
                color: "#ffffff",
                fontFamily: "Droid Serif",
                fontStyle: "italic",
                fontSize: "2em",
                margin: "5px 20px"
              }}
            >
              Ingredients
            </div>
            <FontAwesomeIcon
              className="shopping-cart"
              style={{
                fontSize: "1.3em",
                fontStyle: "bold",
                color: "#CA934C"
              }}
              icon={faQuoteRight}
            />
          </div>
          <div
            style={{
              fontFamily: "Fira Sans",
              fontSize: "1.1em",
              fontWeight: 400,
              color: "#d1d1d1",
              textAlign: "center"
            }}
          >
            Our products are made with love and fresh ingredients.
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-evenly",
            alignItems: "center"
          }}
        >
          <div
            style={{
              backgroundColor: "#ffffff",
              padding: "10px",
              margin: windowWidth <= 991 ? "10px" : "0px"
            }}
          >
            <div
              className="box-text"
              style={{
                backgroundColor: "#ffffff",
                border: "1px dashed #8c8c8c",
                padding: "30px",
                maxWidth: "400px"
              }}
            >
              <p
                style={{
                  marginBottom: "30px",
                  fontFamily: "Fira Sans",
                  color: "#8c8c8c",
                  fontSize: "0.9"
                }}
              >
                Morbi euismod, nulla sit amet dictum venenatis, tortor eros
                dictum lectus, eget malesuada nulla ipsum ut mauris. Praesent et
                tempor purus. Curabitur quis erat purus. Morbi euismod nulla sit
                amet.
              </p>

              <p
                style={{
                  marginBottom: "30px",
                  fontFamily: "Fira Sans",
                  color: "#8c8c8c",
                  fontSize: "0.9"
                }}
              >
                Vestibulum ut justo commodo lacus cursus ultricies id nec justo.
                Nullam tincidunt bibendum mollis. Pellentesque non adipiscing
                est.Nullam tincidunt bibendum mollis.
              </p>

              <p
                style={{
                  marginBottom: "0px",
                  fontFamily: "Fira Sans",
                  color: "#8c8c8c",
                  fontSize: "0.9"
                }}
              >
                Praesent consectetur scelerisque dolor, eget sollicitudin arcu
                porttitor dignissim. Vestibulum luctus pellentesque suscipit.
                Sed libero lectus, fermentum quis erat eget, pretium ornare
                nunc.
              </p>
            </div>
          </div>

          <div
            style={{
              backgroundColor: "#ffffff",
              padding: "10px",
              margin: windowWidth <= 991 ? "10px" : "0px"
            }}
          >
            <div
              className="box-text"
              style={{
                backgroundColor: "#ffffff",
                border: "1px dashed #8c8c8c",
                padding: "30px",
                maxWidth: "400px"
              }}
            >
              <Row>
                <Col style={{ padding: "10px", textAlign: "center" }} lg={true}>
                  <img
                    src={ingredientOne}
                    width="150"
                    height="150"
                    alt="ingredient-1"
                    style={{ boxShadow: "rgba(0, 0, 0, 0.3) 0px 0px 10px 4px" }}
                  />
                </Col>
                <Col style={{ padding: "10px", textAlign: "center" }} lg={true}>
                  <img
                    src={ingredientTwo}
                    width="150"
                    height="150"
                    alt="ingredient-2"
                    style={{ boxShadow: "rgba(0, 0, 0, 0.3) 0px 0px 10px 4px" }}
                  />
                </Col>
              </Row>
              <Row>
                <Col style={{ padding: "10px", textAlign: "center" }} lg={true}>
                  <img
                    src={ingredientThree}
                    width="150"
                    height="150"
                    alt="ingredient-3"
                    style={{ boxShadow: "rgba(0, 0, 0, 0.3) 0px 0px 10px 4px" }}
                  />
                </Col>
                <Col style={{ padding: "10px", textAlign: "center" }} lg={true}>
                  <img
                    src={ingredientFour}
                    width="150"
                    height="150"
                    alt="ingredient-4"
                    style={{ boxShadow: "rgba(0, 0, 0, 0.3) 0px 0px 10px 4px" }}
                  />
                </Col>
              </Row>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Ingredients };
