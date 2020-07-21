import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useWindowWidth } from "@react-hook/window-size";
import React from "react";

import { SpecialtyItem } from "../../../../components/SpecialtyItem";
import { specialtiesArray } from "./specialties";

const Specialty = () => {
  const windowWidth = useWindowWidth();

  return (
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
          width: windowWidth <= 768 ? "auto" : "50%",
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
            Our speciality
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
          Nulla non mattis risus. Praesent accumsan at diam ut molestie.
        </div>
      </div>
      <div
        className="specialties"
        style={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: windowWidth <= 991 ? "column" : "row",
        }}
      >
        {specialtiesArray.map((specialty) => {
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
  );
};

export { Specialty };
