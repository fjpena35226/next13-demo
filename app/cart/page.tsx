import React from "react";
import CartDetail from "../../src/components/Cart/CartDetail/CartDetail.client";

function CartPage() {
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="max-w-[75vw]">
        <p className="text-5xl font-bold mb-16 text-center">Shopping cart</p>
        <CartDetail />
      </div>
    </div>
  );
}

export default CartPage;
