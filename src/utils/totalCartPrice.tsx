import { CartItem } from "../types";

const totalCartPrice = (cart: CartItem[]) => {
  const totalCartValue = cart.reduce(
    (accumulator: number, currentItem: CartItem) => {
      return accumulator + currentItem.count * currentItem.price;
    },
    0
  );
  return totalCartValue;
};

export { totalCartPrice };
