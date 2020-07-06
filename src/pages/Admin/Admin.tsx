import React from "react";
import {
  BrowserRouter as Router,
  Link,
  Route,
  Switch,
  useRouteMatch
} from "react-router-dom";
import { AddPizza } from "../AddPizza";
import { Sandbox } from "../Sandbox";

const Admin = () => {
  const match = useRouteMatch();

  React.useEffect(() => {
    console.log(match);
  }, [match]);

  return (
    <Router>
      <div
        className="admin-container"
        style={{ display: "flex", flexDirection: "row" }}
      >
        <div className="side-bar col-2 p-0">
          <ul>
            <li>
              <Link to={"/admin/add-pizza"}>Add New Pizza</Link>
            </li>
            <li>
              <Link to={"/admin/pizzas"}>All Pizzas</Link>
            </li>
          </ul>
        </div>
        <div className="admin-content col-10">
          <Switch>
            <Route exact path="/admin">
              <h1>Admin Panel</h1>
            </Route>
            <Route exact path="/admin/add-pizza">
              <AddPizza />
            </Route>
            <Route exact path="/admin/pizzas">
              <Sandbox />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export { Admin };
