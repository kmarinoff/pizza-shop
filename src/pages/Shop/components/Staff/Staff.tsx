import "./styles.scss";

import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import chefOne from "src/assets/staff/1-chef.jpg";
import chefTwo from "src/assets/staff/2-chef.jpg";
import chefThree from "src/assets/staff/3-chef.jpg";
import chefFour from "src/assets/staff/4-chef.jpg";

const Staff = () => {
  const chefOneInfoRef = React.useRef(null);
  const chefTwoInfoRef = React.useRef(null);
  const chefThreeInfoRef = React.useRef(null);
  const chefFourInfoRef = React.useRef(null);

  return (
    <div
      style={{
        padding: "73px 0 0 0",
        backgroundColor: "#ffffff",
        // overflow: "hidden"
      }}
    >
      <div>
        <div
          className="header"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
            marginBottom: "80px",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <FontAwesomeIcon
              className="shopping-cart"
              style={{
                fontSize: "1.3em",
                fontStyle: "bold",
                color: "#cccccc",
              }}
              icon={faQuoteLeft}
            />
            <div
              style={{
                color: "#212529",
                fontFamily: "Droid Serif",
                fontStyle: "italic",
                fontSize: "2em",
                margin: "5px 20px",
              }}
            >
              Our Team
            </div>
            <FontAwesomeIcon
              className="shopping-cart"
              style={{
                fontSize: "1.3em",
                fontStyle: "bold",
                color: "#cccccc",
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
              textAlign: "center",
              width: "90%",
            }}
          >
            Nulla non mattis risus. Praesent accumsan at diam ut molestie.
          </div>
        </div>
        <Container fluid>
          <Row>
            <Col
              lg={3}
              md={6}
              sm={6}
              xs={12}
              style={{ padding: 0, position: "relative" }}
              onMouseEnter={() => {
                const info: any = chefOneInfoRef.current;
                const chefInfo: HTMLElement = info;

                chefInfo.classList.toggle("showInfo");
              }}
              onMouseLeave={() => {
                const info: any = chefOneInfoRef.current;
                const chefInfo: HTMLElement = info;

                chefInfo.classList.toggle("showInfo");
              }}
            >
              <Image src={chefOne} fluid />
              <div
                ref={chefOneInfoRef}
                style={{
                  position: "absolute",
                  width: "100%",
                  backgroundColor: "#A0CE54",
                  bottom: 0,
                  opacity: 0,
                  transition: "opacity 150ms ease-in-out",
                  padding: "13px 35px",
                  color: "#ffffff",
                  fontFamily: "Fira Sans",
                }}
              >
                <div style={{ fontSize: "1.1em", fontWeight: "bold" }}>
                  John Doe
                </div>
                <div>chef</div>
              </div>
            </Col>
            <Col
              lg={3}
              md={6}
              sm={6}
              xs={12}
              style={{ padding: 0, position: "relative" }}
              onMouseEnter={() => {
                const info: any = chefTwoInfoRef.current;
                const chefInfo: HTMLElement = info;

                chefInfo.classList.toggle("showInfo");
              }}
              onMouseLeave={() => {
                const info: any = chefTwoInfoRef.current;
                const chefInfo: HTMLElement = info;

                chefInfo.classList.toggle("showInfo");
              }}
            >
              <Image src={chefTwo} fluid />
              <div
                ref={chefTwoInfoRef}
                style={{
                  position: "absolute",
                  width: "100%",
                  backgroundColor: "#A0CE54",
                  bottom: 0,
                  opacity: 0,
                  transition: "opacity 150ms ease-in-out",
                  padding: "13px 35px",
                  color: "#ffffff",
                  fontFamily: "Fira Sans",
                }}
              >
                <div style={{ fontSize: "1.1em", fontWeight: "bold" }}>
                  Alexander Doe
                </div>
                <div>chef</div>
              </div>
            </Col>
            <Col
              lg={3}
              md={6}
              sm={6}
              xs={12}
              style={{ padding: 0, position: "relative" }}
              onMouseEnter={() => {
                const info: any = chefThreeInfoRef.current;
                const chefInfo: HTMLElement = info;

                chefInfo.classList.toggle("showInfo");
              }}
              onMouseLeave={() => {
                const info: any = chefThreeInfoRef.current;
                const chefInfo: HTMLElement = info;

                chefInfo.classList.toggle("showInfo");
              }}
            >
              <Image src={chefThree} fluid />
              <div
                ref={chefThreeInfoRef}
                style={{
                  position: "absolute",
                  width: "100%",
                  backgroundColor: "#A0CE54",
                  bottom: 0,
                  opacity: 0,
                  transition: "opacity 150ms ease-in-out",
                  padding: "13px 35px",
                  color: "#ffffff",
                  fontFamily: "Fira Sans",
                }}
              >
                <div style={{ fontSize: "1.1em", fontWeight: "bold" }}>
                  John Doe
                </div>
                <div>chef</div>
              </div>
            </Col>
            <Col
              lg={3}
              md={6}
              sm={6}
              xs={12}
              style={{ padding: 0, position: "relative" }}
              onMouseEnter={() => {
                const info: any = chefFourInfoRef.current;
                const chefInfo: HTMLElement = info;

                chefInfo.classList.toggle("showInfo");
              }}
              onMouseLeave={() => {
                const info: any = chefFourInfoRef.current;
                const chefInfo: HTMLElement = info;

                chefInfo.classList.toggle("showInfo");
              }}
            >
              <Image src={chefFour} fluid />
              <div
                ref={chefFourInfoRef}
                style={{
                  position: "absolute",
                  width: "100%",
                  backgroundColor: "#A0CE54",
                  bottom: 0,
                  opacity: 0,
                  transition: "opacity 150ms ease-in-out",
                  padding: "13px 35px",
                  color: "#ffffff",
                  fontFamily: "Fira Sans",
                }}
              >
                <div style={{ fontSize: "1.1em", fontWeight: "bold" }}>
                  Alexander Doe
                </div>
                <div>chef</div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export { Staff };
