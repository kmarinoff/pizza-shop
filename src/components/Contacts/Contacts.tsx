import {
  faEnvelope,
  faMapMarker,
  faPhone,
  faQuoteLeft,
  faQuoteRight
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

import { Formik } from "formik";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import contactsBackground from "src/assets/contacts/findus-bg.jpg";
import * as yup from "yup";

import { useWindowWidth } from "@react-hook/window-size";

import "./styles.scss";

const contactSchema = yup.object({
  name: yup
    .string()
    .required()
    .min(2)
    .max(255),
  email: yup
    .string()
    .required()
    .email()
    .min(2)
    .max(255),
  message: yup
    .string()
    .required()
    .min(2)
    .max(1024)
});

const Contacts: React.FC = () => {
  const windowWidth = useWindowWidth();

  return (
    <div
      style={{
        padding: "73px 0",
        background: `url(${contactsBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        fontFamily: "Fira Sans, sans-serif"
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
                padding: windowWidth >= 600 ? "30px" : "10px",
                minWidth: windowWidth >= 600 ? "550px" : "auto"
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
                          marginBottom: "10px",
                          fontWeight: "bold",
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "flex-start",
                          alignItems: "center"
                        }}
                      >
                        <FontAwesomeIcon
                          className="shopping-cart"
                          style={{
                            fontSize: "1em",
                            color: "#A0CE54",
                            marginRight: "5px",
                            marginBottom: "2px"
                          }}
                          icon={faMapMarker}
                        />
                        <div>Find Us</div>
                      </div>
                      <p style={{ marginBottom: "0px", color: "#8c8c8c" }}>
                        Bd de Magenta
                      </p>
                      <p style={{ marginBottom: "0px", color: "#8c8c8c" }}>
                        Paris, 1006, France
                      </p>
                    </div>

                    <div style={{ marginBottom: "20px" }}>
                      <div
                        style={{
                          color: "#a0ce54",
                          fontSize: "1.1em",
                          marginBottom: "10px",
                          fontWeight: "bold",
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "flex-start",
                          alignItems: "center"
                        }}
                      >
                        <FontAwesomeIcon
                          className="shopping-cart"
                          style={{
                            fontSize: "1em",
                            color: "#A0CE54",
                            marginRight: "5px",
                            marginBottom: "2px"
                          }}
                          icon={faEnvelope}
                        />
                        <div>Email</div>
                      </div>
                      <p style={{ marginBottom: "0px", color: "#8c8c8c" }}>
                        office@mail.com
                      </p>
                      <p style={{ marginBottom: "0px", color: "#8c8c8c" }}>
                        sales@mail.com
                      </p>
                    </div>

                    <div style={{ marginBottom: "0px" }}>
                      <div
                        style={{
                          color: "#a0ce54",
                          fontSize: "1.1em",
                          marginBottom: "10px",
                          fontWeight: "bold",
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "flex-start",
                          alignItems: "center"
                        }}
                      >
                        <FontAwesomeIcon
                          className="shopping-cart"
                          style={{
                            fontSize: "1em",
                            color: "#A0CE54",
                            marginRight: "5px",
                            marginBottom: "2px"
                          }}
                          icon={faPhone}
                        />
                        <div>Phones</div>
                      </div>
                      <p style={{ marginBottom: "0px", color: "#8c8c8c" }}>
                        +339 89 89 55 739
                      </p>
                      <p style={{ marginBottom: "0px", color: "#8c8c8c" }}>
                        +339 89 89 55 739
                      </p>
                    </div>
                  </Col>

                  <Col md={12} lg={7}>
                    <div
                      style={{
                        color: "#a0ce54",
                        fontSize: "1.1em",
                        marginBottom: "10px",
                        fontWeight: "bold"
                      }}
                    >
                      Get in touch
                    </div>

                    <Formik
                      initialValues={{ name: "", email: "", message: "" }}
                      onSubmit={(values, actions) => {
                        actions.resetForm();
                        console.log(values);
                      }}
                      validationSchema={contactSchema}
                    >
                      {formik => (
                        <Form onSubmit={formik.handleSubmit}>
                          <Form.Row>
                            <Form.Group as={Col}>
                              {/* <Form.Label>Name</Form.Label> */}
                              <Form.Control
                                type="text"
                                name="name"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                isValid={
                                  formik.touched.name && !formik.errors.name
                                }
                                isInvalid={!!formik.errors.name}
                                placeholder="Name"
                                bsPrefix="input-name"
                              />
                              {/* <Form.Control.Feedback>
                                Looks good!
                              </Form.Control.Feedback> */}

                              {/* <Form.Control.Feedback type="invalid">
                                {formik.errors.name}
                              </Form.Control.Feedback> */}
                            </Form.Group>
                          </Form.Row>

                          <Form.Row>
                            <Form.Group as={Col}>
                              {/* <Form.Label>Email</Form.Label> */}
                              <Form.Control
                                type="text"
                                name="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                // isValid={
                                //   formik.touched.email && !formik.errors.email
                                // }
                                isInvalid={!!formik.errors.email}
                                placeholder="Email"
                                bsPrefix="input-email"
                              />
                              {/* <Form.Control.Feedback>
                                Looks good!
                              </Form.Control.Feedback> */}

                              {/* <Form.Control.Feedback type="invalid">
                                {formik.errors.email}
                              </Form.Control.Feedback> */}
                            </Form.Group>
                          </Form.Row>

                          <Form.Row>
                            <Form.Group as={Col}>
                              {/* <Form.Label>Message</Form.Label> */}
                              <Form.Control
                                type="text"
                                as="textarea"
                                style={{ minHeight: "150px", resize: "none" }}
                                name="message"
                                value={formik.values.message}
                                onChange={formik.handleChange}
                                // isValid={
                                //   formik.touched.message &&
                                //   !formik.errors.message
                                // }
                                isInvalid={!!formik.errors.message}
                                placeholder="Your message"
                                bsPrefix="input-message"
                              />
                              {/* <Form.Control.Feedback>
                                Looks good!
                              </Form.Control.Feedback> */}

                              {/* <Form.Control.Feedback type="invalid">
                                {formik.errors.message}
                              </Form.Control.Feedback> */}
                            </Form.Group>
                          </Form.Row>

                          <Form.Row>
                            <Form.Group as={Col}>
                              <div className="contact-btn-container">
                                <Button
                                  type="submit"
                                  bsPrefix="contact-btn"
                                  style={{ flexGrow: 1 }}
                                >
                                  Send
                                </Button>
                              </div>
                            </Form.Group>
                          </Form.Row>
                        </Form>
                      )}
                    </Formik>
                  </Col>
                </Row>
              </Container>
            </div>
          </div>

          {/* WORK HOURS */}

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
