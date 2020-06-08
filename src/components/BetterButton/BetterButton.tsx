import React from "react";
import Button from "react-bootstrap/Button";

interface BetterButtonProps {
  text: string;
}

const BetterButton: React.FC<BetterButtonProps> = ({ text }) => {
  return <Button>{text}</Button>;
};

export { BetterButton };
