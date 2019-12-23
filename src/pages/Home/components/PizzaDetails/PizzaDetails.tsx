import get from "lodash/get";
import React, { FC, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useDispatch, useSelector } from "react-redux";
import { match, useHistory, useRouteMatch } from "react-router-dom";
import { getPizzasRequest } from "src/reduxStore";
import { Pizza } from "src/types";

const PizzaDetails: FC = () => {
  const dispatch = useDispatch();
  const pizzas: Pizza[] = useSelector((state: any) => state.pizzas);
  const { isLoading }: { isLoading: boolean } = useSelector(
    (state: any) => state.loading
  );
  const routeMatch: match<{ id: string }> = useRouteMatch();
  const { push } = useHistory();
  const { id } = routeMatch.params;

  useEffect(() => {
    dispatch(getPizzasRequest(id));
  }, [dispatch, id]);

  return (
    <>
      <div className="d-flex justify-content-center flex-wrap">
        {!isLoading ? (
          <Card style={{ width: "18rem", margin: "10px 10px" }}>
            <Card.Img variant="top" src="https://via.placeholder.com/286x180" />
            <Card.Body>
              <Card.Title>
                <h2 style={{ textAlign: "center" }}>
                  {get(pizzas[0], "name")}
                </h2>
              </Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <div className="d-flex justify-content-between align-items-center">
                <p style={{ margin: 0 }}>Cost: ${get(pizzas[0], "price")}</p>
                <Button
                  style={{ alignSelf: "flex-end" }}
                  onClick={() => {
                    push("/");
                  }}
                >
                  Go Back To Home
                </Button>
              </div>
            </Card.Body>
          </Card>
        ) : null}
      </div>
    </>
  );
};

export { PizzaDetails };
