"use client";
import Link from "next/link";
import React from "react";
import UserAvatar from "src/components/Avatar/Avatar.client";
import CartIcon from "src/components/Cart/CartIcon/CartIcon.client";

function Header() {
  return (
    <nav className="bg-blue-500 h-[70px] px-4 lg:px-[10vw] py-4 flex flex-row sticky top-0 z-50">
      <div className="flex grow text-white uppercase items-center">
        <Link href={"/"} className="text-white">
          NextJs 13 Shop
        </Link>
      </div>
      <div className="flex flex-row gap-x-6 items-center">
        <Link href={"/products"} className="text-white">
          Products
        </Link>
        <Link href={"/cart"} className="text-white">
          <CartIcon />
        </Link>
        <Link href={"/profile"} className="text-white">
          <UserAvatar />
        </Link>
      </div>
    </nav>
  );
}

export default React.memo(Header);
