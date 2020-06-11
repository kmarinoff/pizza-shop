import React, { FC, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { Footer } from "src/pages/components";
import { getPizzas } from "src/reduxStore";
import { IRootState, Pizza } from "src/types";
import { PizzaList } from "./components/PizzaList";

const Home: FC = () => {
  const dispatch = useDispatch();
  const pizzas: Pizza[] = useSelector(
    (state: IRootState) => state.pizzas.pizzas
  );

  useEffect(() => {
    dispatch(getPizzas());
  }, [dispatch]);

  return (
    <>
      <div>
        {/* TODO loading state for pizzas */}
        {pizzas.length !== 0 ? (
          <>
            <div className="container">
              <PizzaList pizzas={pizzas} />
            </div>
            <Footer />
          </>
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
