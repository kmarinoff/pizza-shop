import React from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import { CSSTransition } from "react-transition-group";
import { pizzaArray } from "./pizzaArray";
import "./styles.scss";

const OrderBook: React.FC = () => {
  const [value, setValue] = React.useState(1);
  const handleChange = (val: number) => setValue(val);

  return (
    <>
      <div
        className="products"
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center"
        }}
      >
        <ToggleButtonGroup
          type="radio"
          name="options"
          defaultValue={value}
          value={value}
          onChange={handleChange}
        >
          <ToggleButton value={1} bsPrefix="pizza-btn">
            <div style={{ width: "100%", margin: "5px 15px" }}>Pizza</div>
          </ToggleButton>
          <ToggleButton value={2} bsPrefix="burger-btn">
            <div style={{ width: "100%", margin: "5px 15px" }}>Burger</div>
          </ToggleButton>
          <ToggleButton value={3} bsPrefix="kebap-btn">
            <div style={{ width: "100%", margin: "5px 15px" }}>Kebap</div>
          </ToggleButton>
        </ToggleButtonGroup>
      </div>
      <div
        className="line"
        style={{
          width: "200px",
          borderBottom: "1px solid #cacaca",
          margin: "50px 0"
        }}
      />
      <div style={{ position: "relative", overflow: "hidden" }}>
        <CSSTransition
          in={value === 1}
          timeout={5000}
          classNames="menu-primary"
          unmountOnExit
        >
          <div className="menu">
            <div
              style={{
                backgroundColor: "pink",
                display: "flex",
                flexDirection: "row",
                fontFamily: "Fira Sans",
                width: "940px"
              }}
            >
              <div>
                <div
                  style={{
                    backgroundColor: "#2E2E2E",
                    padding: "15px 30px",
                    color: "#ffffff",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                >
                  <div>Added products: 1</div>
                  <button>Pre-Order Now</button>
                </div>
                <div
                  className="left-book-side"
                  style={{
                    backgroundColor: "#2E2E2E",
                    padding: "30px",
                    overflow: "auto",
                    height: "530px"
                  }}
                >
                  {pizzaArray.map(pizza => (
                    <div
                      key={pizza.id}
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "400px",
                        padding: "10px 0"
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center",
                          color: "#ffffff"
                        }}
                      >
                        <img
                          width="78"
                          height="78"
                          src={pizza.imgSrc}
                          alt={pizza.name}
                          style={{
                            border: "1px solid #a7a6a7",
                            marginRight: "10px",
                            borderRadius: "5px"
                          }}
                        />
                        <div>{pizza.name}</div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center"
                        }}
                      >
                        <div style={{ color: "#A0CE54" }}>
                          {pizza.price.toFixed(2)} $
                        </div>
                        <button style={{ marginLeft: "5px" }}>+</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="right-book-side"
                style={{ backgroundColor: "#ffffff" }}
              >
                <img
                  src={require("src/assets/order-book/pizza-bg.jpg")}
                  alt="pizzaBackground"
                  style={{ width: "100%" }}
                />
                <div style={{ margin: "20px" }}>
                  <div
                    style={{
                      marginTop: "3px",
                      marginBottom: "27px",
                      fontSize: "20px",
                      color: "#222222",
                      lineHeight: "30px",
                      fontWeight: 500,
                      textAlign: "center"
                    }}
                  >
                    Pizza
                  </div>
                  <div
                    style={{
                      fontSize: "16px",
                      color: "#787878",
                      fontWeight: 300,
                      lineHeight: "24px"
                    }}
                  >
                    The origin of the word pizza is uncertain and debated. One
                    popular suggestion holds that it originates from the Greek
                    pita (derived from ancient Greek pēktos, πηκτός, meaning
                    "solid" or "clotted"). The ancient Greeks covered their
                    bread with oils, herbs and cheese. The Romans developed
                    placenta, a sheet of dough topped with cheese and honey and
                    flavored with bay leaves.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CSSTransition>

        <CSSTransition
          in={value === 2}
          timeout={5000}
          classNames="menu-primary"
          unmountOnExit
        >
          <div className="menu">
            <div
              style={{
                backgroundColor: "pink",
                display: "flex",
                flexDirection: "row",
                fontFamily: "Fira Sans",
                width: "940px"
              }}
            >
              <div>
                <div
                  style={{
                    backgroundColor: "#2E2E2E",
                    padding: "15px 30px",
                    color: "#ffffff",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                >
                  <div>Added products: 1</div>
                  <button>Pre-Order Now</button>
                </div>
                <div
                  className="left-book-side"
                  style={{
                    backgroundColor: "#2E2E2E",
                    padding: "30px",
                    overflow: "auto",
                    height: "530px"
                  }}
                >
                  {pizzaArray.map(pizza => (
                    <div
                      key={pizza.id}
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "400px",
                        padding: "10px 0"
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center",
                          color: "#ffffff"
                        }}
                      >
                        <img
                          width="78"
                          height="78"
                          src={pizza.imgSrc}
                          alt={pizza.name}
                          style={{
                            border: "1px solid #a7a6a7",
                            marginRight: "10px",
                            borderRadius: "5px"
                          }}
                        />
                        <div>{pizza.name}</div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center"
                        }}
                      >
                        <div style={{ color: "#A0CE54" }}>
                          {pizza.price.toFixed(2)} $
                        </div>
                        <button style={{ marginLeft: "5px" }}>+</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="right-book-side"
                style={{ backgroundColor: "#ffffff" }}
              >
                <img
                  src={require("src/assets/order-book/pizza-bg.jpg")}
                  alt="pizzaBackground"
                  style={{ width: "100%" }}
                />
                <div style={{ margin: "20px" }}>
                  <div
                    style={{
                      marginTop: "3px",
                      marginBottom: "27px",
                      fontSize: "20px",
                      color: "#222222",
                      lineHeight: "30px",
                      fontWeight: 500,
                      textAlign: "center"
                    }}
                  >
                    Burger
                  </div>
                  <div
                    style={{
                      fontSize: "16px",
                      color: "#787878",
                      fontWeight: 300,
                      lineHeight: "24px"
                    }}
                  >
                    The origin of the word pizza is uncertain and debated. One
                    popular suggestion holds that it originates from the Greek
                    pita (derived from ancient Greek pēktos, πηκτός, meaning
                    "solid" or "clotted"). The ancient Greeks covered their
                    bread with oils, herbs and cheese. The Romans developed
                    placenta, a sheet of dough topped with cheese and honey and
                    flavored with bay leaves.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CSSTransition>

        <CSSTransition
          in={value === 3}
          timeout={5000}
          classNames="menu-primary"
          unmountOnExit
        >
          <div className="menu">
            <div
              style={{
                backgroundColor: "pink",
                display: "flex",
                flexDirection: "row",
                fontFamily: "Fira Sans",
                width: "940px"
              }}
            >
              <div>
                <div
                  style={{
                    backgroundColor: "#2E2E2E",
                    padding: "15px 30px",
                    color: "#ffffff",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                  }}
                >
                  <div>Added products: 1</div>
                  <button>Pre-Order Now</button>
                </div>
                <div
                  className="left-book-side"
                  style={{
                    backgroundColor: "#2E2E2E",
                    padding: "30px",
                    overflow: "auto",
                    height: "530px"
                  }}
                >
                  {pizzaArray.map(pizza => (
                    <div
                      key={pizza.id}
                      style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        width: "400px",
                        padding: "10px 0"
                      }}
                    >
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "center",
                          alignItems: "center",
                          color: "#ffffff"
                        }}
                      >
                        <img
                          width="78"
                          height="78"
                          src={pizza.imgSrc}
                          alt={pizza.name}
                          style={{
                            border: "1px solid #a7a6a7",
                            marginRight: "10px",
                            borderRadius: "5px"
                          }}
                        />
                        <div>{pizza.name}</div>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "row",
                          justifyContent: "space-between",
                          alignItems: "center"
                        }}
                      >
                        <div style={{ color: "#A0CE54" }}>
                          {pizza.price.toFixed(2)} $
                        </div>
                        <button style={{ marginLeft: "5px" }}>+</button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div
                className="right-book-side"
                style={{ backgroundColor: "#ffffff" }}
              >
                <img
                  src={require("src/assets/order-book/pizza-bg.jpg")}
                  alt="pizzaBackground"
                  style={{ width: "100%" }}
                />
                <div style={{ margin: "20px" }}>
                  <div
                    style={{
                      marginTop: "3px",
                      marginBottom: "27px",
                      fontSize: "20px",
                      color: "#222222",
                      lineHeight: "30px",
                      fontWeight: 500,
                      textAlign: "center"
                    }}
                  >
                    Kebap
                  </div>
                  <div
                    style={{
                      fontSize: "16px",
                      color: "#787878",
                      fontWeight: 300,
                      lineHeight: "24px"
                    }}
                  >
                    The origin of the word pizza is uncertain and debated. One
                    popular suggestion holds that it originates from the Greek
                    pita (derived from ancient Greek pēktos, πηκτός, meaning
                    "solid" or "clotted"). The ancient Greeks covered their
                    bread with oils, herbs and cheese. The Romans developed
                    placenta, a sheet of dough topped with cheese and honey and
                    flavored with bay leaves.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CSSTransition>
      </div>
    </>
  );
};

export { OrderBook };
