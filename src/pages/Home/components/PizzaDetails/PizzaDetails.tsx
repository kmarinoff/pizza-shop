import get from "lodash/get";
import React, { FC, useEffect } from "react";
import Card from "react-bootstrap/Card";
import Spinner from "react-bootstrap/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { match, useHistory, useRouteMatch } from "react-router-dom";
import { BetterButton } from "src/components";
import { Footer } from "src/pages/components";
import { getPizza } from "src/reduxStore/modules/pizzas/pizzasActionCreators";
import { IRootState, Pizza } from "src/types";

const PizzaDetails: FC = () => {
  const dispatch = useDispatch();
  const pizzas: Pizza[] = useSelector(
    (state: IRootState) => state.pizzas.pizzas
  );
  const isFetching: boolean = useSelector(
    (state: any) => state.pizzas.isFetching
  );
  const routeMatch: match<{ id: string }> = useRouteMatch();
  const { push } = useHistory();
  const { id } = routeMatch.params;

  useEffect(() => {
    dispatch(getPizza(id));
  }, [dispatch, id]);

  return (
    <>
      {!isFetching ? (
        <>
          <div
            className="d-flex justify-content-center flex-wrap flex-column align-items-center"
            style={{ height: "calc(100vh - 56px - 1.5rem - 80px)" }}
          >
            <Card style={{ width: "18rem", margin: "10px 10px" }}>
              <Card.Img variant="top" src={get(pizzas[0], "img")} />
              <Card.Body>
                <Card.Title>
                  <h2 style={{ textAlign: "center" }}>
                    {get(pizzas[0], "name")}
                  </h2>
                </Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up
                  the bulk of the card&apos;s content.
                </Card.Text>
                <div className="d-flex justify-content-between align-items-center">
                  <p style={{ margin: 0 }}>Cost: ${get(pizzas[0], "price")}</p>
                  <BetterButton
                    buttonText="Go Back To Home"
                    bsPrefix="go-back-to-home-btn"
                    onClick={() => {
                      push("/");
                    }}
                  />
                </div>
              </Card.Body>
            </Card>
          </div>
          <Footer />
        </>
      ) : (
        <div
          style={{
            minHeight: "80vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center ",
          }}
        >
          <Spinner animation="grow" />
        </div>
      )}
    </>
  );
};

export { PizzaDetails };
