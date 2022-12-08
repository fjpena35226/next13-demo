import React, { Suspense } from "react";

import Head from "./head";
import "styles/globals.css";
import Header from "../src/components/Header/Header";
import { getUser } from "src/helpers/api/services/user.service";
import { UserProvider } from "src/context/user.context";
import Loading from "./loading";
import { isAuth } from "src/helpers/auth";
import { getCart } from "src/helpers/api/services/cart.service";
import { CartProvider } from "src/context/cart.context";

type RootLayoutProps = {
  children: React.ReactNode;
};

async function RootLayout({ children }: RootLayoutProps) {
  const userId = isAuth();
  const user = userId ? await getUser(userId) : undefined;
  const cart = await getCart();

  return (
    <html>
      <Head />
      <body>
        <Suspense fallback={<Loading />}>
          <UserProvider user={user}>
            <CartProvider cart={cart}>
              <Header />
              <main className="pt-8 px-4 lg:px-[10vw]">
                <div>{children}</div>
              </main>
            </CartProvider>
          </UserProvider>
        </Suspense>
      </body>
    </html>
  );
}

export default RootLayout;
