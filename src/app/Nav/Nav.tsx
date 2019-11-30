import React, { FC } from "react";
import Navbar from "react-bootstrap/Navbar";
import "./Nav.scss";

const Nav: FC = () => {
  return (
    <>
      <Navbar bg="dark">
        <Navbar.Brand className="white-text">Pizza Shop</Navbar.Brand>
      </Navbar>
    </>
  );
};

export { Nav };
