import React, { Suspense } from "react";
import Loading from "./loading";
import FeaturedProducts from "../src/components/Products/FeaturedProducts/FeaturedProducts";

function Home() {
  return (
    <div className="flex justify-center flex-col items-center">
      <div className="w-full">
        <div>
          <p className="text-5xl font-bold mb-4">Lorem Ipsum</p>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
        <div className="w-full mt-8">
          <h3 className="text-4xl text-center mb-8">
            Check our featured products
          </h3>
          <Suspense fallback={<Loading />}>
            {/* @ts-ignore */}
            <FeaturedProducts />
          </Suspense>
        </div>
        <div className="w-full mt-16">
          <h3 className="text-4xl text-center mb-8">Why do we use it?</h3>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry&apos;s standard dummy
            text ever since the 1500s, when an unknown printer took a galley of
            type and scrambled it to make a type specimen book. It has survived
            not only five centuries, but also the leap into electronic
            typesetting, remaining essentially unchanged. It was popularised in
            the 1960s with the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;
