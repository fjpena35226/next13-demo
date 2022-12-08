import { Category } from "../models/category.mode";
import { Product } from "../models/product.model";
import { Resource } from "../types/resource.type";
import { createService } from "./base.service";

export const ProductsResource: Resource = {
  path: "products",
};

const { getResource, getResources, queryResource } =
  createService<Resource>(ProductsResource);

export const getProducts = async (options?: {}) => {
  try {
    const data: Product[] = await getResources(
      options || {
        next: {
          revalidate: 60,
        },
      }
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const getProductsByCategory = async (
  category: Category,
  options?: {}
) => {
  try {
    const data: Product[] = await queryResource(
      `category/${category.name}`,
      options || {
        next: {
          revalidate: 60,
        },
      }
    );
    return data;
  } catch (error) {
    throw error;
  }
};

export const getProduct = async (id: string, options?: {}) => {
  try {
    const data: Product = await getResource(
      id,
      options || {
        next: {
          revalidate: 60,
        },
      }
    );
    return data;
  } catch (error) {
    throw error;
  }
};
