"use client";
import React from "react";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type FeaturedProductsContainerProps = {
  children: React.ReactNode | React.ReactNode[];
};

function FeaturedProductsContainer({
  children,
}: FeaturedProductsContainerProps) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: true,
  };

  return <Slider {...settings}>{children}</Slider>;
}

export default FeaturedProductsContainer;
