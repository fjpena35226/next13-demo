import Loading from "app/loading";
import ProductList from "src/components/Products/ProductList/ProductList";
import React, { Suspense } from "react";
import { Category } from "src/helpers/api/models/category.mode";

type ProductsByCategoryPageProps = {
  params: {
    categoryName?: string;
  };
};

function ProductsByCategoryPage({
  params: { categoryName },
}: ProductsByCategoryPageProps) {
  const category: Category = {
    name: categoryName || "",
  };

  return (
    <>
      <div className="w-full">
        <p className="text-5xl font-bold mb-16 text-left capitalize">
          {categoryName ? decodeURIComponent(categoryName) : "Products"}
        </p>
      </div>
      <Suspense fallback={<Loading />}>
        {/* @ts-ignore */}
        <ProductList category={category} />
      </Suspense>
    </>
  );
}

export default ProductsByCategoryPage;
