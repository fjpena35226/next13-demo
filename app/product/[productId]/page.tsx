import Loading from "app/loading";
import { notFound } from "next/navigation";
import React, { Suspense } from "react";
import { getProduct } from "src/helpers/api";
import { Product } from "src/helpers/api/models/product.model";
import ProductDetail from "../../../src/components/Products/Product/ProductDetail";

type ProductDetailProps = {
  params: {
    productId: string;
  };
};

async function ProductDetailPage({
  params: { productId },
}: ProductDetailProps) {
  const product: Product = await getProduct(productId);

  if (!product.id) {
    notFound();
  }

  return (
    <div className="flex justify-center flex-col items-center">
      <div className="flex flex-row w-full">
        <Suspense fallback={<Loading />}>
          <ProductDetail product={product} />
        </Suspense>
      </div>
    </div>
  );
}

export default ProductDetailPage;
