"use client";
import React from "react";
import { useCart } from "src/context/cart.context";
import { useUser } from "src/context/user.context";
import { CartLine } from "src/helpers/api/models/cartLine.model";
import { Product } from "src/helpers/api/models/product.model";
import Button from "../../@UI/Button/Button.client";

type AddToCartButtonProps = {
  product: Product;
};

function AddToCartButton({ product }: AddToCartButtonProps) {
  const { addProduct } = useCart();

  const handleAddToCart = (
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    evt.preventDefault();
    const line: CartLine = {
      productId: product.id,
      product: product,
      quantity: 1,
    };

    addProduct(line);
  };
  return (
    <Button
      color="bg-green-500"
      onClick={handleAddToCart}
    >
      Add to cart
    </Button>
  );
}

export default AddToCartButton;
