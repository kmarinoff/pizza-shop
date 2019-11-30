import React, { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Nav } from "src/app/Nav";
import { getPizzas } from "src/reduxStore";
import { Pizza } from "src/types";

const Home: FC = () => {
  const dispatch = useDispatch();
  const pizzas: Pizza[] = useSelector((state: any) => state.pizzas);

  useEffect(() => {
    dispatch(getPizzas());
  }, [dispatch]);

  return (
    <>
      <Nav />
      <div className="container">
        <ul className="d-flex justify-content-between flex-wrap">
          {pizzas.map((pizza: Pizza) => (
            <li
              className="list-unstyled m-4"
              key={pizza.id}
              style={{ width: "300px" }}
            >
              <h2>{pizza.name}</h2>
              <h5>${pizza.price}</h5>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export { Home };
