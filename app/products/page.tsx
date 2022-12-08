import Loading from "app/loading";
import React, { Suspense } from "react";
import CategoryList from "../../src/components/CategoryList/CategoryList";
import ProductList from "../../src/components/Products/ProductList/ProductList";

function ProductsPage() {
  return (
    <>
      <div className="w-full">
        <p className="text-5xl font-bold mb-16 text-left">Products</p>
      </div>
      <Suspense fallback={<Loading />}>
        {/* @ts-ignore */}
        <ProductList />
      </Suspense>
    </>
  );
}

export default ProductsPage;
