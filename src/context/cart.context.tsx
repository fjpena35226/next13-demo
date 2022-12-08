"use client";
import React, { useCallback, useMemo, useState } from "react";
import { Cart } from "src/helpers/api/models/cart.model";
import { CartLine } from "src/helpers/api/models/cartLine.model";
import { Product } from "src/helpers/api/models/product.model";

type CartContextType = {
  cart?: Cart;
  addProduct: (product: CartLine) => void;
  removeProduct: (product: Product) => void;
};

type CartProviderProps = {
  children: React.ReactNode;
  cart: Cart;
};

const CartContext = React.createContext<CartContextType>({
  cart: undefined,
  addProduct: () => false,
  removeProduct: () => false,
});

export const CartProvider = ({
  cart: ssrCart,
  children,
}: CartProviderProps) => {
  const [cart, setCart] = useState<Cart>(ssrCart);

  const addProduct = useCallback(
    (newLine: CartLine) => {
      const indexLineExists = cart.products.findIndex(
        (line) => line.productId === newLine.productId
      );

      let updatedLines = cart.products;
      if (indexLineExists >= 0) {
        updatedLines[indexLineExists].quantity++;
      } else {
        updatedLines = [...cart.products, newLine];
      }

      const updatedCart: Cart = {
        ...cart,
        products: updatedLines,
      };
      setCart(updatedCart);
    },
    [cart]
  );

  const removeProduct = useCallback(
    (product: Product) => {
      const updatedCart: Cart = {
        ...cart,
        products: cart.products?.filter(
          (prod) => prod.productId !== product.id
        ),
      };
      setCart(updatedCart);
    },
    [cart]
  );

  const providerValue = useMemo(
    () => ({
      cart,
      addProduct,
      removeProduct,
    }),
    [cart, addProduct, removeProduct]
  );

  return (
    <CartContext.Provider value={providerValue}>
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = React.useContext(CartContext);
  if (!context) throw Error("useCart hook must be under CartProvider");

  return context;
};
