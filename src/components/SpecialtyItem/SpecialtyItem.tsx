import { useWindowWidth } from "@react-hook/window-size";
import React from "react";

interface SpecialtyItemProps {
  specialtyType: string;
  imageSrc: string;
  specialtyTitle: string;
  specialtyBody: string;
}

const SpecialtyItem: React.FC<SpecialtyItemProps> = ({
  specialtyType,
  imageSrc,
  specialtyTitle,
  specialtyBody,
}) => {
  const windowWidth = useWindowWidth();

  return (
    <div
      style={{
        width:
          windowWidth < 992 - 17
            ? "315px"
            : windowWidth < 1200 - 17
            ? "250px"
            : "300px",
        backgroundColor: "white",
        boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.2)",
        borderRadius: "10px",
        margin: windowWidth <= 991 ? "10px" : "0px",
      }}
    >
      <img
        src={imageSrc}
        alt={specialtyType}
        style={{
          borderTopLeftRadius: "10px",
          borderTopRightRadius: "10px",
          width: "100%",
        }}
      />
      <div className="content" style={{ padding: "10px 20px" }}>
        <div
          className="specialty-title"
          style={{
            fontFamily: "Droid Serif",
            fontSize: "1.2em",
            letterSpacing: "1px",
          }}
        >
          {specialtyTitle}
        </div>
        <hr style={{ color: "#A0CE54" }} />
        <p style={{ fontFamily: "Fira Sans", color: "#959595" }}>
          {specialtyBody}
        </p>
      </div>
    </div>
  );
};

export { SpecialtyItem };
