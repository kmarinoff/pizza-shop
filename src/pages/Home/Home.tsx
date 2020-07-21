import React, { FC, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { Footer } from "src/pages/components";
import { getNewPizzas } from "src/reduxStore/modules/newPizzas";
import { NewPizza } from "src/types/newPizza";

import { PizzaList } from "./components/PizzaList";

const Home: FC = () => {
  const dispatch = useDispatch();
  const newPizzas: NewPizza[] = useSelector(
    (state: any) => state.newPizzas.newPizzas
  );

  useEffect(() => {
    dispatch(getNewPizzas());
  }, [dispatch]);

  return (
    <>
      <div>
        {/* TODO loading state for pizzas */}
        {newPizzas.length !== 0 ? (
          <>
            <div className="container" style={{ height: "100vh" }}>
              <PizzaList pizzas={newPizzas} />
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
      </div>
    </>
  );
};

export { Home };
