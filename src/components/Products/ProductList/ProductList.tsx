import React from "react";
import { getProducts } from "src/helpers/api";
import { Product } from "src/helpers/api/models/product.model";
import { getProductsByCategory } from "src/helpers/api/services/product.service";
import { Category } from "src/helpers/api/models/category.mode";
import ProductCard from "src/components/Products/Product/ProductCard.client";

type ProductListProps = {
  category?: Category;
};

async function ProductList({ category }: ProductListProps) {
  const products: Product[] = category
    ? await getProductsByCategory(category)
    : await getProducts();

  return (
    <div className="flex flex-row flex-wrap justify-around gap-8">
      {products?.map((prod) => (
        <div key={prod.id} className="w-full lg:w-2/12 rounded-md shadow-md">
          <ProductCard product={prod} />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
