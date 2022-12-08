import { Category } from "../models/category.mode";
import { Resource } from "../types/resource.type";
import { createService } from "./base.service";

export const CategoryResource: Resource = {
  path: "products/categories",
};

const { getResources } = createService<Resource>(CategoryResource);

export const getCategories = async (options?: {}) => {
  try {
    const data: string[] = await getResources(
      options || {
        next: {
          revalidate: 60,
        },
      }
    );
    return data.map(
      (category) =>
        ({
          name: category,
        } as Category)
    );
  } catch (error) {
    throw error;
  }
};
