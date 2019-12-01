import React, { FC } from "react";
import { Pizza } from "src/types";
import { PizzaListItem } from "./PizzaListItem";

interface PizzaListProps {
  pizzas: Pizza[];
}

const PizzaList: FC<PizzaListProps> = ({ pizzas }) => {
  return (
    <div className="d-flex justify-content-center flex-wrap">
      {pizzas.length !== 0
        ? pizzas.map((pizza: Pizza) => (
            <PizzaListItem key={pizza.id} pizza={pizza} />
          ))
        : null}
    </div>
  );
};

export { PizzaList };
