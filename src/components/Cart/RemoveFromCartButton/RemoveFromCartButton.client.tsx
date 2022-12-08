"use client";
import React from "react";
import { FaTrashAlt } from "react-icons/fa";
import { useCart } from "src/context/cart.context";
import { Product } from "src/helpers/api/models/product.model";
import Button from "../../@UI/Button/Button.client";

type RemoveFromCartButtonProps = {
  product: Product;
};

function RemoveFromCartButton({ product }: RemoveFromCartButtonProps) {
  const { removeProduct } = useCart();
  const handleAddToCart = (
    evt: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    evt.preventDefault();
    removeProduct(product);
  };
  return (
    <Button color="bg-red-500" onClick={handleAddToCart} iconBtn={true}>
      <FaTrashAlt className="text-white" />
    </Button>
  );
}

export default RemoveFromCartButton;
