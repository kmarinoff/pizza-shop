import React from "react";

import { useDispatch, useSelector } from "react-redux";
import { getNewPizzas } from "src/reduxStore/modules/newPizzas/newPizzasActionCreators";

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
          <ol>
            {newPizzas.map((pizza: NewPizza, pizzaIdx: number) => {
              return (
                <React.Fragment key={pizzaIdx}>
                  <img
                    width="120"
                    height="100"
                    src={pizza.img}
                    alt={`${pizza.name}-img`}
                  />
                  <li>{pizza.name}</li>
                  <ul>
                    {pizza.ingredients.map(
                      (ingredient: string, ingredientIdx: number) => {
                        return <li key={ingredientIdx}>{ingredient}</li>;
                      }
                    )}
                  </ul>
                </React.Fragment>
              );
            })}
          </ol>
        ) : (
          <div>No Pizzas Available!</div>
        )}
      </div>
    );
  }
};

export { Sandbox };
