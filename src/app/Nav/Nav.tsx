import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons";
import React, { FC } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Navbar from "react-bootstrap/Navbar";
import { Link, useHistory } from "react-router-dom";
import { signOut } from "src/setup";
import "./Nav.scss";
import { FontAwesome } from "./StyledNav";

import { toast } from "react-toastify";

interface NavProps {
  isLoggedIn: boolean;
}

const Nav: FC<NavProps> = ({ isLoggedIn }) => {
  const { push } = useHistory();
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
                <Dropdown.Item
                  href="#/action-4"
                  onClick={() => toast("Wow so easy !")}
                >
                  Toastify Test
                </Dropdown.Item>
                <Dropdown.Divider />
                <Dropdown.Item
                  onClick={async () => {
                    try {
                      await signOut();
                      toast.info("Log out success!");
                    } catch (error) {
                      console.log("error on log out:", error);
                      toast.error("Error on log out!");
                    }
                  }}
                >
                  Logout
                </Dropdown.Item>
              </Dropdown.Menu>
            ) : (
              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() => {
                    push("/login");
                  }}
                >
                  LogIn
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    push("/signup");
                  }}
                >
                  Sign Up
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
