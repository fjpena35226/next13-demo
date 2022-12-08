import Loading from "app/loading";
import React, { Suspense } from "react";
import CategoryList from "../../src/components/CategoryList/CategoryList";

type RootLayoutProps = {
  children: React.ReactNode;
};

async function RootLayout({ children }: RootLayoutProps) {
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="flex flex-row">
        <div className="w-full md:w-3/12 px-6 pt-24 flex justify-center">
          <Suspense fallback={<Loading />}>
            {/* @ts-ignore */}
            <CategoryList />
          </Suspense>
        </div>
        <div className="w-full min-w-full md:w-9/12 md:min-w-[70vw]">{children}</div>
      </div>
    </div>
  );
}

export default RootLayout;
