import get from "lodash/get";
import React, { FC, useEffect } from "react";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { match, useHistory, useRouteMatch } from "react-router-dom";
import { getPizzas } from "src/reduxStore";
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
    dispatch(getPizzas(id));
  }, [dispatch, id]);

  return (
    <>
      {!isLoading ? (
        <div
          style={{ width: "300px", display: "flex", flexDirection: "column" }}
        >
          <h2 style={{ textAlign: "center" }}>{get(pizzas[0], "name")}</h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}
          >
            <h5 style={{ textAlign: "end" }}>
              Cost: ${get(pizzas[0], "price")}
            </h5>
            <Button
              style={{ alignSelf: "flex-end" }}
              onClick={() => {
                push("/home");
              }}
            >
              Go Back To Home
            </Button>
          </div>
        </div>
      ) : null}
    </>
  );
};

export { PizzaDetails };
