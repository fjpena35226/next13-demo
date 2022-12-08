"use client";
import Image from "next/image";
import React from "react";
import AddToCartButton from "src/components/Cart/AddToCartButton/AddToCartButton.client";
import BackButton from "src/components/BackButton/BackButton.client";
import { Product } from "src/helpers/api/models/product.model";

type ProductDetailProps = {
  product: Product;
};

function ProductDetail({ product }: ProductDetailProps) {
  return (
    <div className="flex flex-row w-full flex-wrap justify-between gap-6 lg:gap-6">
      <div className="w-full lg:w-5/12">
        <div className="w-full relative overflow-hidden h-[450px]">
          <Image
            src={product.image}
            alt={product.title}
            width={450}
            height={450}
            className="object-contain w-full max-h-[450px]"
          />
        </div>
      </div>
      <div className="w-full lg:w-6/12">
        <p className="text-5xl mb-6">{product.title || ""}</p>
        <p className="text-5xl font-bold mb-6">${product.price || ""}</p>
        <p className="mb-16">{product.description || ""}</p>
        <div className="w-full flex flex-row gap-6">
          <BackButton />
          <AddToCartButton product={product} />
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
