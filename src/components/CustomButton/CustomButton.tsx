import React from "react";
import Button from "react-bootstrap/Button";

interface CustomButtonProps {
  buttonText: string;
  bsPrefix: string;
  styles?: React.CSSProperties | undefined;
  containerStyles?: React.CSSProperties | undefined;
  onClick?: () => void;
  bgColor?: string;
  bgActiveColor?: string;
}

const CustomButton: React.FC<CustomButtonProps> = ({
  buttonText,
  bsPrefix,
  styles,
  containerStyles,
  onClick,
  bgColor,
  bgActiveColor
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isActive, setIsActive] = React.useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`${bsPrefix || "btn"}-container`}
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        border: `2px solid ${bgColor || "#a0ce54"}`,
        backgroundColor: isHovered ? "transparent" : `${bgColor || "#a0ce54"}`,
        transition: isHovered
          ? "background-color 150ms ease-in-out"
          : "background-color 150ms ease-in-out",
        ...containerStyles
      }}
    >
      <Button
        onMouseDown={() => setIsActive(true)}
        onMouseUp={() => setIsActive(false)}
        style={{
          // width: "100%",
          border: 0,
          outline: "none",
          padding: "5px",
          margin: "2px",
          backgroundColor: isActive
            ? `${bgActiveColor || "#89b640"}`
            : `${bgColor || "#a0ce54"}`,
          color: "white",
          transition: isHovered
            ? "background-color 150ms ease-in-out"
            : "background-color 150ms ease-in-out",
          ...styles
        }}
        bsPrefix={bsPrefix}
        onClick={onClick}
      >
        {buttonText}
      </Button>
    </div>
  );
};

export { CustomButton };
