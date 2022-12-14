import Loading from "app/loading";
import React, { Suspense } from "react";
import ProductList from "../../src/components/Products/ProductList/ProductList";

function ProductsPage() {
  return (
    <>
      <div className="w-full mt-6 md:mt-0">
        <p className="text-5xl font-bold mb-16 text-center md:text-left">Products</p>
      </div>
      <Suspense fallback={<Loading />}>
        {/* @ts-ignore */}
        <ProductList />
      </Suspense>
    </>
  );
}

export default ProductsPage;
