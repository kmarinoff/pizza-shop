import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import contactsBackground from "src/assets/contacts/findus-bg.jpg";

const Contacts: React.FC = () => {
  return (
    <div
      style={{
        padding: "73px 0",
        background: `url(${contactsBackground})`,
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
              Find us
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
              color: "#d1d1d1"
            }}
          >
            Duis vitae velit mollis, congue nisi dignissim, pellentesque lorem
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
          {/* FORM */}

          <div style={{ backgroundColor: "#ffffff", padding: "10px" }}>
            <div
              className="box-text"
              style={{
                backgroundColor: "#ffffff",
                border: "1px dashed #8c8c8c",
                padding: "30px",
                minWidth: "550px"
              }}
            >
              <Container>
                <Row>
                  <Col>
                    <div style={{ marginBottom: "20px" }}>
                      <div
                        style={{
                          color: "#a0ce54",
                          fontSize: "1.1em",
                          marginBottom: "10px"
                        }}
                      >
                        Find Us
                      </div>
                      <p style={{ marginBottom: "0px" }}>Bd de Magenta</p>
                      <p style={{ marginBottom: "0px" }}>Paris, 1006, France</p>
                    </div>

                    <div style={{ marginBottom: "20px" }}>
                      <div
                        style={{
                          color: "#a0ce54",
                          fontSize: "1.1em",
                          marginBottom: "10px"
                        }}
                      >
                        Email
                      </div>
                      <p style={{ marginBottom: "0px" }}>office@mail.com</p>
                      <p style={{ marginBottom: "0px" }}>sales@mail.com</p>
                    </div>

                    <div style={{ marginBottom: "0px" }}>
                      <div
                        style={{
                          color: "#a0ce54",
                          fontSize: "1.1em",
                          marginBottom: "10px"
                        }}
                      >
                        Phones
                      </div>
                      <p style={{ marginBottom: "0px" }}>+339 89 89 55 739</p>
                      <p style={{ marginBottom: "0px" }}>+339 89 89 55 739</p>
                    </div>
                  </Col>
                  {/* TODO FORM */}
                  <Col></Col>
                </Row>
              </Container>
            </div>
          </div>

          {/* WORK HOURS */}

          <div style={{ backgroundColor: "#ffffff", padding: "10px" }}>
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
                  marginBottom: "22px",
                  fontFamily: "Fira Sans",
                  color: "#A0CE54",
                  fontSize: "1.2em",
                  fontWeight: "bold"
                }}
              >
                Working days & hours
              </p>
              <p
                style={{
                  marginBottom: "22px",
                  fontFamily: "Fira Sans",
                  color: "#8c8c8c",
                  fontSize: "0.9em"
                }}
              >
                Monday: 08.00 am to 11.00 pm
              </p>

              <p
                style={{
                  marginBottom: "22px",
                  fontFamily: "Fira Sans",
                  color: "#8c8c8c",
                  fontSize: "0.9em"
                }}
              >
                Tuesday: 08.00 am to 11.00 pm
              </p>

              <p
                style={{
                  marginBottom: "22px",
                  fontFamily: "Fira Sans",
                  color: "#8c8c8c",
                  fontSize: "0.9em"
                }}
              >
                Wednesday: 08.00 am to 11.00 pm
              </p>

              <p
                style={{
                  marginBottom: "22px",
                  fontFamily: "Fira Sans",
                  color: "#8c8c8c",
                  fontSize: "0.9em"
                }}
              >
                Thursday: 08.00 am to 11.00 pm
              </p>

              <p
                style={{
                  marginBottom: "22px",
                  fontFamily: "Fira Sans",
                  color: "#8c8c8c",
                  fontSize: "0.9em"
                }}
              >
                Friday: 08.00 am to 11.00 pm
              </p>

              <p
                style={{
                  marginBottom: "22px",
                  fontFamily: "Fira Sans",
                  color: "#8c8c8c",
                  fontSize: "0.9em"
                }}
              >
                Satrurday: 10.00 am to 11.00 pm
              </p>

              <p
                style={{
                  marginBottom: "0px",
                  fontFamily: "Fira Sans",
                  color: "#8c8c8c",
                  fontSize: "0.9em"
                }}
              >
                Sunday: 10.00 am to 11.00 pm
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { Contacts };
