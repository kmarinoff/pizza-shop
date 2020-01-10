import React, { FC, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { getPizzasRequest } from "src/reduxStore";
import { createLoadingSelector } from "src/reduxStore/actions/selectors";
import { Pizza } from "src/types";
import { PizzaList } from "./components/PizzaList";

const Home: FC = () => {
  const dispatch = useDispatch();
  const loadingSelectors = createLoadingSelector(["GET_PIZZAS"]);
  const pizzas: Pizza[] = useSelector((state: any) => state.pizzas);
  const isLoading = useSelector((state: any) => ({
    isFetching: loadingSelectors(state)
  }));

  console.log("isLoading:", isLoading);

  useEffect(() => {
    dispatch(getPizzasRequest());
  }, [dispatch]);

  return (
    <>
      <div className="container">
        {/* TODO loading state for pizzas */}
        {pizzas.length !== 0 ? (
          <PizzaList pizzas={pizzas} />
        ) : (
          <div
            style={{
              minHeight: "80vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center "
            }}
          >
            <Spinner animation="grow" />
          </div>
        )}
      </div>
    </>
  );
};

export { Home };
