export interface NewPizza {
  id: string;
  name: string;
  img: string;
  size: number;
  price: number[];
  ingredients: string[];
  description: string;
  createdAt: Date;
}
