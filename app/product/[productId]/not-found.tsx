import Link from "next/link";
import React from "react";
import Button from "src/components/@UI/Button/Button.client";

function ProductNotFound() {
  return (
    <div className="flex justify-center flex-col items-center">
      <h2 className="text-center mb-5">
        Whoops we could not find the product you are looking for.
      </h2>
      <Link href="/products">
        <Button>Continue Shopping</Button>
      </Link>
    </div>
  );
}

export default ProductNotFound;
