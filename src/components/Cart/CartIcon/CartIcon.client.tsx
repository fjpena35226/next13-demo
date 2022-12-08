"use client";
import React, { useMemo } from "react";
import { FaShoppingCart } from "react-icons/fa";
import { useCart } from "src/context/cart.context";
import { useUser } from "src/context/user.context";
import { CartLine } from "src/helpers/api/models/cartLine.model";

function CartIcon() {
  const { cart } = useCart();

  const countProducts = useMemo(() => {
    return cart?.products.reduce((accumulator: number, current: CartLine) => {
      return accumulator + current.quantity;
    }, 0);
  }, [cart]);

  return (
    <div className="relative">
      {cart && cart?.products?.length > 0 && (
        <div className="rounded-full w-4 h-4 bg-red-400 absolute -top-3 -right-3 flex items-center justify-center">
          <span className="text-white text-xs">{countProducts}</span>
        </div>
      )}
      <FaShoppingCart />
    </div>
  );
}

export default CartIcon;
