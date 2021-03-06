import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons";
import React, { FC, useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Navbar from "react-bootstrap/Navbar";
import { Link, useHistory } from "react-router-dom";
import { signOut } from "src/setup";
import "./Nav.scss";
import { FontAwesome } from "./StyledNav";

import { toast } from "react-toastify";
import { CartIcon, ShoppingCartDropdown } from "src/components";

interface NavProps {
  isLoggedIn: boolean;
}

const Nav: FC<NavProps> = ({ isLoggedIn }) => {
  const { push } = useHistory();
  const [show, setShow] = useState(false);
  return (
    <>
      <Navbar bg="dark">
        <div className="container d-flex justify-content-between">
          <Navbar.Brand className="white-text">
            <Link
              to="/"
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                textDecoration: "none"
              }}
            >
              <FontAwesome icon={faPizzaSlice} />
              <div
                style={{
                  marginLeft: "10px",
                  textDecoration: "none",
                  color: "white",
                  fontFamily: "Droid Serif"
                }}
              >
                Pizza Shop
              </div>
            </Link>
          </Navbar.Brand>

          <div className="d-flex flex-row">
            <div style={{ position: "relative", userSelect: "none" }}>
              {isLoggedIn ? (
                <>
                  <CartIcon
                    handleClick={() => {
                      setShow(!show);
                    }}
                  />
                  {show ? (
                    <ShoppingCartDropdown
                      handleClick={() => {
                        setShow(false);
                      }}
                    />
                  ) : null}
                </>
              ) : null}
            </div>
            <Dropdown alignRight>
              <Dropdown.Toggle variant="secondary" id="dropdown-basic">
                Menu
              </Dropdown.Toggle>
              {isLoggedIn ? (
                <Dropdown.Menu>
                  <Dropdown.Item
                    onClick={() => {
                      push("/shop");
                    }}
                  >
                    Shop
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                  <Dropdown.Item href="#/action-2">
                    Another action
                  </Dropdown.Item>
                  <Dropdown.Item href="#/action-3">
                    Something else
                  </Dropdown.Item>
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
                      push("/shop");
                    }}
                  >
                    Shop
                  </Dropdown.Item>
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
        </div>
      </Navbar>
    </>
  );
};

export { Nav };
