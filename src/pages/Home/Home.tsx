import React, { FC, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Nav } from "src/app/Nav";
import { getPizzas } from "src/reduxStore";

const Home: FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getPizzas());
  }, [dispatch]);

  return (
    <>
      <Nav />
    </>
  );
};

export { Home };
