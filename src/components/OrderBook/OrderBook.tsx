import React from "react";
import ToggleButton from "react-bootstrap/ToggleButton";
import ToggleButtonGroup from "react-bootstrap/ToggleButtonGroup";
import { Scrollbars } from "react-custom-scrollbars";
import { CSSTransition } from "react-transition-group";
import { burgersArray } from "./burgersArray";
import { kebabsArray } from "./kebabsArray";
import { pizzasArray } from "./pizzasArray";
import "./styles.scss";

const OrderBook: React.FC = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (val: number) => setValue(val);

  React.useEffect(() => {
    setValue(1);
  }, []);

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
          value={value}
          onChange={handleChange}
        >
          <ToggleButton value={1} bsPrefix="pizza-btn">
            <div style={{ width: "100%", margin: "5px 15px" }}>Pizza</div>
          </ToggleButton>
          <ToggleButton value={2} bsPrefix="burger-btn">
            <div style={{ width: "100%", margin: "5px 15px" }}>Burger</div>
          </ToggleButton>
          <ToggleButton value={3} bsPrefix="kebab-btn">
            <div style={{ width: "100%", margin: "5px 15px" }}>Kebab</div>
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
      <div style={{ overflow: "hidden", position: "relative" }}>
        <CSSTransition
          in={value === 1}
          timeout={300}
          classNames="pizza-menu"
          unmountOnExit
        >
          <div
            style={{
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
                  height: "550px",
                  width: "475px"
                }}
              >
                <Scrollbars>
                  {pizzasArray.map(pizza => (
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
                        <div style={{ maxWidth: "230px" }}>{pizza.name}</div>
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
                </Scrollbars>
              </div>
            </div>
            <div
              className="right-book-side"
              style={{
                backgroundColor: "#ffffff",
                display: "flex",
                flexDirection: "column",
                width: "100%",
                paddingBottom: "20px"
              }}
            >
              <img
                src={require("src/assets/order-book/pizzas/pizza-bg.jpg")}
                alt="pizzaBackground"
                style={{ width: "100%" }}
              />

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
              <Scrollbars>
                <div
                  style={{
                    fontSize: "16px",
                    color: "#787878",
                    fontWeight: 300,
                    lineHeight: "24px",
                    margin: "0px 20px 0 20px"
                  }}
                >
                  The origin of the word pizza is uncertain and debated. One
                  popular suggestion holds that it originates from the Greek
                  pita (derived from ancient Greek pēktos, πηκτός, meaning
                  "solid" or "clotted"). The ancient Greeks covered their bread
                  with oils, herbs and cheese. The Romans developed placenta, a
                  sheet of dough topped with cheese and honey and flavored with
                  bay leaves.
                </div>
              </Scrollbars>
            </div>
          </div>
        </CSSTransition>

        <CSSTransition
          in={value === 2}
          timeout={300}
          classNames="burger-menu"
          unmountOnExit
        >
          <div
            style={{
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
                  height: "550px",
                  width: "475px"
                }}
              >
                <Scrollbars>
                  {burgersArray.map(burger => (
                    <div
                      key={burger.id}
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
                          src={burger.imgSrc}
                          alt={burger.name}
                          style={{
                            border: "1px solid #a7a6a7",
                            marginRight: "10px",
                            borderRadius: "5px"
                          }}
                        />
                        <div style={{ maxWidth: "230px" }}>{burger.name}</div>
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
                          {burger.price.toFixed(2)} $
                        </div>
                        <button style={{ marginLeft: "5px" }}>+</button>
                      </div>
                    </div>
                  ))}
                </Scrollbars>
              </div>
            </div>
            <div
              className="right-book-side"
              style={{
                backgroundColor: "#ffffff",
                display: "flex",
                flexDirection: "column",
                width: "100%",
                paddingBottom: "20px"
              }}
            >
              <img
                src={require("src/assets/order-book/burgers/burger-bg.jpg")}
                alt="burgerBackground"
                style={{ width: "100%" }}
              />

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
                Cheeseburger
              </div>
              <Scrollbars>
                <div
                  style={{
                    fontSize: "16px",
                    color: "#787878",
                    fontWeight: 300,
                    lineHeight: "24px",
                    margin: "0px 20px 0 20px"
                  }}
                >
                  Adding cheese to hamburgers became popular in the late-1920s
                  to mid-1930s, and there are several competing claims as to who
                  created the first cheeseburger. Lionel Sternberger is reputed
                  to have invented the cheeseburger in 1926 at the age of 16
                  when he was working as a fry cook at his father's Pasadena,
                  California sandwich shop, "The Rite Spot," and "experimentally
                  dropped a slab of American cheese on a sizzling hamburger
                  cheeseburger.
                </div>
              </Scrollbars>
            </div>
          </div>
        </CSSTransition>

        <CSSTransition
          in={value === 3}
          timeout={300}
          classNames="kebab-menu"
          unmountOnExit
        >
          <div
            style={{
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
                  height: "550px",
                  width: "475px"
                }}
              >
                <Scrollbars>
                  {kebabsArray.map(kebab => (
                    <div
                      key={kebab.id}
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
                          src={kebab.imgSrc}
                          alt={kebab.name}
                          style={{
                            border: "1px solid #a7a6a7",
                            marginRight: "10px",
                            borderRadius: "5px"
                          }}
                        />
                        <div style={{ maxWidth: "230px" }}>{kebab.name}</div>
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
                          {kebab.price.toFixed(2)} $
                        </div>
                        <button style={{ marginLeft: "5px" }}>+</button>
                      </div>
                    </div>
                  ))}
                </Scrollbars>
              </div>
            </div>
            <div
              className="right-book-side"
              style={{
                backgroundColor: "#ffffff",
                display: "flex",
                flexDirection: "column",
                width: "100%",
                paddingBottom: "20px"
              }}
            >
              <img
                src={require("src/assets/order-book/kebabs/kebab-bg.jpg")}
                alt="kebabBackground"
                style={{ width: "100%" }}
              />

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
                Kebab
              </div>
              <Scrollbars>
                <div
                  style={{
                    fontSize: "16px",
                    color: "#787878",
                    fontWeight: 300,
                    lineHeight: "24px",
                    margin: "0px 20px 0 20px"
                  }}
                >
                  Kebab (also kebap or kabab) is a Middle Eastern dish of pieces
                  of meat, fish, or vegetables roasted or grilled on a skewer or
                  spit originating in the Middle East, and later adopted in
                  Central Asia and by the regions of the former Mongol Empire
                  and later Ottoman Empire, before spreading worldwide. In
                  American English, kebab with no qualification refers to shish
                  kebab (Turkish: şiş kebap) cooked on a skewer, whereas in
                  Europe it refers to doner kebab, sliced meat served in a pita.
                  In the Middle East, however, kebab refers to meat that is
                  cooked over or next to flames; large or small cuts of meat, or
                  even ground meat; it may be served on plates, in sandwiches,
                  or in bowls. The traditional meat for kebab is lamb, but
                  depending on local tastes and religious prohibitions, other
                  meats may include beef, goat, chicken, pork or fish. Like
                  other ethnic foods brought by travellers, the kebab has
                  remained a part of everyday cuisine in most of the Eastern
                  Mediterranean and South Asia. It is also popular among Western
                  youth as a snack after a night-out.
                </div>
              </Scrollbars>
            </div>
          </div>
        </CSSTransition>
      </div>
    </>
  );
};

export { OrderBook };
