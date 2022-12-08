import { Product } from "./product.model";

export interface CartLine {
  productId: string;
  product?: Product;
  quantity: number;
}
