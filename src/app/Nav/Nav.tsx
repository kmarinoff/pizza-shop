import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons";
import React, { FC } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import { signInWithFacebook, signInWithGoogle, signOut } from "src/setup";
import "./Nav.scss";
import { FontAwesome } from "./StyledNav";

interface NavProps {
  isLoggedIn: boolean;
}

const Nav: FC<NavProps> = ({ isLoggedIn }) => {
  return (
    <>
      <Navbar bg="dark">
        <div className="container d-flex justify-content-between">
          <Navbar.Brand className="white-text">
            <Link to="/">
              <FontAwesome icon={faPizzaSlice} />
            </Link>
          </Navbar.Brand>
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Menu
            </Dropdown.Toggle>
            {isLoggedIn ? (
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item onClick={signOut}>Logout</Dropdown.Item>
              </Dropdown.Menu>
            ) : (
              <Dropdown.Menu>
                <Dropdown.Item onClick={signInWithGoogle}>
                  Google LogIn
                </Dropdown.Item>
                <Dropdown.Item onClick={signInWithFacebook}>
                  Facebok LogIn
                </Dropdown.Item>
              </Dropdown.Menu>
            )}
          </Dropdown>
        </div>
      </Navbar>
    </>
  );
};

export { Nav };
