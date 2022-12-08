import { CartLine } from "./cartLine.model";

export interface Cart {
  id: string;
  userId: string;
  date: Date;
  products: CartLine[];
}
