import React from "react";
import { PizzaItem } from "src/components/PizzaItem";
import { NewPizza } from "src/types/newPizza";

interface PizzaListProps {
  currentItems: NewPizza[];
}

const PizzaList: React.FC<PizzaListProps> = ({ currentItems }) => {
  return (
    <>
      {currentItems.map((pizza: NewPizza) => (
        <PizzaItem key={pizza.id} pizza={pizza} />
      ))}
    </>
  );
};

export { PizzaList };
