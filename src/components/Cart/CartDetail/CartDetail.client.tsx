"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import BackButton from "src/components/BackButton/BackButton.client";
import Button from "src/components/@UI/Button/Button.client";
import RemoveFromCartButton from "src/components/Cart/RemoveFromCartButton/RemoveFromCartButton.client";
import { useCart } from "src/context/cart.context";

function CartDetail() {
  const { cart } = useCart();

  return cart && cart.products.length > 0 ? (
    <>
      <ul className="list-none">
        {cart.products?.map((cartLine) => (
          <li key={cartLine.productId}>
            <Link href={`/product/${cartLine.productId}`}>
              <div className="flex flex-row rounded-md shadow-md py-6 px-8 items-center gap-5 w-full md:min-w-[20vw]">
                {cartLine.product?.image && (
                  <Image
                    src={cartLine.product.image}
                    width={100}
                    height={100}
                    alt={cartLine.product?.title}
                    className="w-[100px] rounded-md"
                  />
                )}
                <div className="flex w-full flex-col">
                  <p> {cartLine.product?.title || ""} </p>
                  <div className="w-full flex flex-col md:flex-row justify-between items-end flex-wrap">
                    <div className="w-full md:w-8/12">
                      <h3 className="font-semibold mt-3">
                        ${cartLine.product?.price || ""}{" "}
                      </h3>
                      <p>Quantity: {cartLine.quantity}</p>
                    </div>
                    <div className="w-full md:w-2/12">
                      {cartLine.product && (
                        <RemoveFromCartButton product={cartLine.product} />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-5">
        <BackButton />
      </div>
    </>
  ) : (
    <>
      <h3 className="text-center mb-5">There is no items in your cart.</h3>
      <div className="flex flex-row gap-5 items-center">
        <Link href="/products">
          <Button className="bg-green-500">Continue Shopping</Button>
        </Link>
        <BackButton />
      </div>
    </>
  );
}

export default CartDetail;
