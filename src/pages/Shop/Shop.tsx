import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { SpecialtyItem } from "src/components";
import { CustomCarousel } from "src/components/CustomCarousel";

import specialtyOne from "src/assets/specialties/1-specialty.jpg";
import specialtyTwo from "src/assets/specialties/2-specialty.jpg";
import specialtyThree from "src/assets/specialties/3-specialty.jpg";

const Shop: React.FC = () => {
  const specialtiesArray: Array<{
    id: number;
    type: string;
    imageSrc: string;
    specialtyTitle: string;
    specialtyBody: string;
  }> = [
    {
      id: 1,
      type: "pizza",
      imageSrc: String(specialtyOne),
      specialtyTitle: "Pizza",
      specialtyBody:
        "Pellentesque et nisl scelerisque, viverra neque et, consectetur ex. Ut maximus ut tortor eget laoreet. Aliquam ullamcorper tellus tortor, vitae ultricies massa auctor id. Donec vel mauris turpis."
    },
    {
      id: 2,
      type: "burger",
      imageSrc: String(specialtyTwo),
      specialtyTitle: "Burger",
      specialtyBody:
        "Pellentesque et nisl scelerisque, viverra neque et, consectetur ex. Ut maximus ut tortor eget laoreet. Aliquam ullamcorper tellus tortor, vitae ultricies massa auctor id. Donec vel mauris turpis."
    },
    {
      id: 3,
      type: "kebab",
      imageSrc: String(specialtyThree),
      specialtyTitle: "Kebab",
      specialtyBody:
        "Pellentesque et nisl scelerisque, viverra neque et, consectetur ex. Ut maximus ut tortor eget laoreet. Aliquam ullamcorper tellus tortor, vitae ultricies massa auctor id. Donec vel mauris turpis."
    }
  ];

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
              margin: "0 20px 50px 20px"
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
    </>
  );
};

export { Shop };
