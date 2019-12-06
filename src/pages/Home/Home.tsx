import React, { FC, useEffect } from "react";
import Spinner from "react-bootstrap/Spinner";
import { useDispatch, useSelector } from "react-redux";
import { useFirestore } from "react-redux-firebase";
import { Nav } from "src/app/Nav";
import { getPizzas } from "src/reduxStore";
import { firebaseConfig, firebaseInstance } from "src/setup/firebase";
import { Pizza } from "src/types";
import { Cart } from "./components";
import { PizzaList } from "./components/PizzaList";

const Home: FC = () => {
  const dispatch = useDispatch();
  const pizzas: Pizza[] = useSelector((state: any) => state.pizzas);
  const { isLoading }: { isLoading: boolean } = useSelector(
    (state: any) => state.loading
  );
  const firestore = useFirestore();

  useEffect(() => {
    dispatch(getPizzas());
  }, [dispatch]);

  // console.log(firebaseInstance.firestore());
  console.log(firestore);

  return (
    <>
      <Nav />
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
