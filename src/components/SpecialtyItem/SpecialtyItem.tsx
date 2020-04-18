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
  specialtyBody
}) => {
  return (
    <div style={{ width: "300px" }}>
      <img width="300" height="200" src={imageSrc} alt={specialtyType} />
      <div className="specialty-title">{specialtyTitle}</div>
      <hr />
      <p>{specialtyBody}</p>
    </div>
  );
};

export { SpecialtyItem };
