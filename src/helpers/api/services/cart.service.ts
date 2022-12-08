import { Cart } from "../models/cart.model";
import { CartLine } from "../models/cartLine.model";
import { Product } from "../models/product.model";
import { Resource } from "../types/resource.type";
import { createService } from "./base.service";
import { getProduct } from "./product.service";

export const UserResource: Resource = {
  path: "carts",
};

const { getResource } = createService<Resource>(UserResource);

export const getCart = async (cartId?: string, options?: {}) => {
  try {
    const data: Cart = await getResource(
      cartId || "1",
      options || {
        next: {
          revalidate: 60,
        },
      }
    );

    await data?.products?.reduce(
      async (prev: Promise<any>, current: CartLine, index) => {
        await prev;
        const product = await getProduct(`${current.productId}`);
        const currentProduct = data.products[index];
        data.products[index] = {
          ...currentProduct,
          product,
        };
        return Promise.resolve();
      },
      Promise.resolve()
    );

    return data;
  } catch (error) {
    throw error;
  }
};
