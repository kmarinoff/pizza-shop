import { CartItem } from "src/types/cart";
import { totalCartPrice } from "src/utils/totalCartPrice";

describe("totalCartPrice", () => {
  const cart: CartItem[] = [
    { id: 1, count: 1, name: "Pizza 1", price: 1 },
    { id: 2, count: 1, name: "Pizza 2", price: 1 }
  ];

  it("should calculate the total price of the cart", () => {
    const result = totalCartPrice(cart);

    expect(result).toBe(2);
  });
});
