import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { getNewPizzas } from "src/reduxStore/modules/newPizzas/newPizzasActionCreators";

import { PizzaItem } from "src/components/PizzaItem";
import { NewPizza } from "src/types/newPizza";

const Sandbox: React.FC = () => {
  const dispatch = useDispatch();
  const loadingPizzas: boolean = useSelector((state: any) => {
    return state.newPizzas.isFetching;
  });
  const newPizzas: NewPizza[] = useSelector((state: any) => {
    return state.newPizzas.newPizzas;
  });

  React.useEffect(() => {
    dispatch(getNewPizzas());
  }, [dispatch]);

  if (loadingPizzas) {
    return <div>Loading Pizzas ...</div>;
  } else {
    return (
      <div>
        {newPizzas.length > 0 ? (
          newPizzas.map((pizza: NewPizza) => {
            return <PizzaItem key={pizza.id} pizza={pizza} />;
          })
        ) : (
          <div>No Pizzas Available!</div>
        )}
      </div>
    );
  }
};

export { Sandbox };
