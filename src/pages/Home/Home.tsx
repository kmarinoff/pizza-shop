import React, { FC, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { getPizzas } from "src/reduxStore";
import { Pizza } from "src/types";
import { Cart } from "./components";
import { PizzaList } from "./components/PizzaList";

const Home: FC = () => {
  const dispatch = useDispatch();
  const pizzas: Pizza[] = useSelector((state: any) => state.pizzas);
  const { isLoading }: { isLoading: boolean } = useSelector(
    (state: any) => state.loading
  );

  useEffect(() => {
    dispatch(getPizzas());
  }, [dispatch]);

  return (
    <>
      <div className="container">
        {!isLoading ? (
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
      <Cart />
    </>
  );
};

export { Home };
