import "bootstrap/dist/css/bootstrap.min.css";

import React from "react";
import { Button, Spinner } from "react-bootstrap";

interface BetterButtonProps {
  buttonText: string;
  bsPrefix: string;
  loading?: boolean;
  disabled?: boolean;
  onClick?: () => void;
  buttonStyles?: React.CSSProperties | undefined;
  containerStyles?: React.CSSProperties | undefined;
}

const BetterButton: React.FC<BetterButtonProps> = ({
  buttonText,
  bsPrefix,
  loading = false,
  disabled = false,
  onClick,
  buttonStyles,
  containerStyles,
}) => {
  const [isHovered, setIsHovered] = React.useState(false);
  const [isActive, setIsActive] = React.useState(false);

  return (
    <div
      onMouseEnter={() => {
        if (loading || disabled) {
          setIsHovered(false);
        } else {
          setIsHovered(true);
        }
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setIsActive(false);
      }}
      className={`${bsPrefix || "btn"}-container`}
      style={{
        display: "inline-block",
        outline: "none",
        padding: "2px",
        border: loading || disabled ? "2px solid #c9e3a4" : "2px solid #a0ce54",
        backgroundColor: isHovered
          ? "transparent"
          : loading || disabled
          ? "#a0ce5480"
          : "#a0ce54",
        color: "white",
        transition: isHovered
          ? "background-color 150ms ease-in-out"
          : "background-color 150ms ease-in-out",
        ...containerStyles,
      }}
    >
      <Button
        onClick={onClick}
        onMouseDown={() => setIsActive(true)}
        onMouseUp={() => setIsActive(false)}
        bsPrefix={bsPrefix}
        disabled={loading || disabled}
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
          color: "white",
          border: 0,
          outline: "none",
          padding: "5px",
          backgroundColor: isActive
            ? "#89b640"
            : loading || disabled
            ? "#c9e3a4"
            : "#a0ce54",
          transition: isHovered
            ? "background-color 150ms ease-in-out"
            : "background-color 150ms ease-in-out",
          margin: "0 auto",
          ...buttonStyles,
        }}
      >
        {loading ? (
          <>
            <Spinner
              animation="border"
              style={{
                marginRight: "10px",
                width: "1rem",
                height: "1rem",
                fontSize: "6px",
              }}
            />
            {buttonText || "Loading ..."}
          </>
        ) : (
          <>{buttonText}</>
        )}
      </Button>
    </div>
  );
};

export { BetterButton };
