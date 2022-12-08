"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AddToCartButton from "src/components/Cart/AddToCartButton/AddToCartButton.client";
import { Product } from "src/helpers/api/models/product.model";

type ProductCardProps = {
  product: Product;
};

function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`}>
      <div className="flex flex-col w-full max-h-[350px] items-center">
        {product?.image && (
          <div className="w-full relative overflow-hidden h-[200px]">
            <Image
              src={product.image}
              alt={product.title}
              width={300}
              height={200}
              className="object-contain w-full max-h-[200px]"
            />
          </div>
        )}
        {product?.title && (
          <div className="mt-4 text-center w-full px-6">
            <h3 className="font-semibold text-ellipsis overflow-hidden max-w-full whitespace-nowrap my-8 text-center">
              {product.title}
            </h3>
            <div className="my-4 flex w-full justify-center">
              <AddToCartButton product={product} />
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}

export default ProductCard;
