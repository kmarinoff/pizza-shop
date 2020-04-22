import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Ingredients, SpecialtyItem, Staff } from "src/components";
import { CustomCarousel } from "src/components/CustomCarousel";
import { specialtiesArray } from "./specialties";

import { OrderBook } from "src/components/OrderBook";

const Shop: React.FC = () => {
  return (
    <>
      <CustomCarousel />
      <section id="specialty" style={{ backgroundColor: "#f3f3f3" }}>
        <div
          className="container"
          style={{ paddingTop: "40px", paddingBottom: "40px" }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              margin: "0 auto 50px auto",
              width: "50%",
              textAlign: "center"
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
                Our speciality
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
              Nulla non mattis risus. Praesent accumsan at diam ut molestie.
            </div>
          </div>
          <div
            className="specialties"
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center"
            }}
          >
            {specialtiesArray.map(specialty => {
              return (
                <SpecialtyItem
                  key={specialty.id}
                  specialtyType={specialty.type}
                  imageSrc={specialty.imageSrc}
                  specialtyTitle={specialty.specialtyTitle}
                  specialtyBody={specialty.specialtyBody}
                />
              );
            })}
          </div>
        </div>
      </section>

      <section id="products">
        <div
          className="container"
          style={{
            paddingTop: "40px",
            paddingBottom: "40px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center"
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              margin: "0 auto 50px auto",
              width: "50%",
              textAlign: "center"
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
                Products
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
              lla non mattis risus. Praesent accumsan at diam ut molestie.
              Integer at tempus nulla, eu pharetra sapien. Cras luctus metus non
              convallis sollicitudin.
            </div>
          </div>

          <OrderBook />
        </div>
      </section>

      <section id="ingredients">
        <Ingredients />
      </section>

      <section id="staff">
        <Staff />
      </section>
    </>
  );
};

export { Shop };
