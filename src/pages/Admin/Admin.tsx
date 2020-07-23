/* eslint no-console: off, no-unused-vars: off */

import "./styles.scss";

import { faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Image } from "react-bootstrap";
import { useSelector } from "react-redux";
import {
  BrowserRouter as Router,
  NavLink,
  Route,
  Switch,
} from "react-router-dom";
import { storage } from "src/setup/firebase";
import { IRootState } from "src/types/rootState";

import { AddPizza } from "../AddPizza";
import { Payments } from "../Payments";
import { Sandbox } from "../Sandbox";

const Admin = () => {
  const { auth, profile }: { profile: any; auth: any } = useSelector(
    (state: IRootState) => state.firebase
  );

  const [avatarURI, setAvatarURI] = React.useState("");

  const getAvatar = (userId: string) => {
    // Points to the root reference
    const storageRef = storage.ref();

    // Create a reference with an initial file path and name
    const pathReference = storage.ref(`avatars/${userId}.jpg`);

    storageRef
      .child(pathReference.fullPath)
      .getDownloadURL()
      .then((url) => {
        // console.log(url);
        setAvatarURI(url);
      })
      .catch((error) => {
        // Handle any errors
        setAvatarURI("no-avatar");
        // console.log(error);
      });
  };

  // React.useEffect(() => {
  //   console.log(avatarURI);
  // }, [avatarURI]);

  React.useEffect(() => {
    if (profile.photoURL === null) {
      setAvatarURI("no-avatar");
    } else if (profile.photoURL.includes("avatars")) {
      getAvatar(auth.uid);
    } else {
      setAvatarURI(profile.photoURL);
    }

    return () => {
      setAvatarURI("");
    };
  }, [profile.photoURL, auth.uid]);

  return (
    <Router>
      <div
        className="admin-container"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <div className="side-bar col-2 p-0">
          <div
            className="side-bar-head"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "50px",
              marginBottom: "20px",
            }}
          >
            {avatarURI === "no-avatar" ? (
              <FontAwesomeIcon
                style={{
                  maxWidth: "100px",
                  maxHeight: "100px",
                  minWidth: "100px",
                  minHeight: "100px",
                  fontSize: "1.3em",
                  fontStyle: "bold",
                  color: "#A0CE54",
                  padding: "15px",
                }}
                icon={faUser}
              />
            ) : (
              <Image
                style={{
                  maxWidth: "100px",
                  maxHeight: "100px",
                  minWidth: "100px",
                  minHeight: "100px",
                  background: `url(${avatarURI}) no-repeat center / cover`,
                  borderRadius: "50%",
                  boxShadow: "0px 0px 5px 0px rgba(0,0,0,0.1)",
                }}
              />
            )}
          </div>
          <div
            style={{ display: "flex", flexDirection: "column" }}
            className="side-bar-menu"
          >
            <NavLink to="/admin/add-pizza">Add New Pizza</NavLink>
            <NavLink to="/admin/pizzas">All Pizzas</NavLink>
            <NavLink to="/admin/payments">Payments</NavLink>
          </div>
        </div>
        <div className="admin-content col-10">
          <Switch>
            <Route exact path="/admin">
              <h1 style={{ marginTop: "50px", textAlign: "center" }}>
                Admin Panel
              </h1>
            </Route>
            <Route exact path="/admin/add-pizza">
              <AddPizza />
            </Route>
            <Route exact path="/admin/pizzas">
              <Sandbox />
            </Route>
            <Route exact path="/admin/payments">
              <Payments />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export { Admin };
