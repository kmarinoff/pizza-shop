import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useWindowWidth } from "@react-hook/window-size";
import React from "react";
import { OrderBook } from "src/components/OrderBook";

const Products = () => {
  const windowWidth = useWindowWidth();

  return (
    <div
      className="container"
      style={{
        paddingTop: "40px",
        paddingBottom: "40px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center",
          margin: "0 auto 50px auto",
          width: windowWidth <= 550 ? "auto" : "50%",
          textAlign: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <FontAwesomeIcon
            className="shopping-cart"
            style={{
              fontSize: "1.3em",
              fontStyle: "bold",
              color: "#ccc",
            }}
            icon={faQuoteLeft}
          />
          <div
            style={{
              color: "333",
              fontFamily: "Droid Serif",
              fontStyle: "italic",
              fontSize: "2em",
              margin: "5px 20px",
            }}
          >
            Products
          </div>
          <FontAwesomeIcon
            className="shopping-cart"
            style={{
              fontSize: "1.3em",
              fontStyle: "bold",
              color: "#ccc",
            }}
            icon={faQuoteRight}
          />
        </div>
        <div
          style={{
            color: "#A8A8A8",
            fontStyle: "italic",
            fontSize: "0.9em",
          }}
        >
          lla non mattis risus. Praesent accumsan at diam ut molestie. Integer
          at tempus nulla, eu pharetra sapien. Cras luctus metus non convallis
          sollicitudin.
        </div>
      </div>

      <OrderBook />
    </div>
  );
};

export { Products };
