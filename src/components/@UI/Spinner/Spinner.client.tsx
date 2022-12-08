"use client";
import React from "react";

type SpinnerProps = {
  size?: string;
  color?: string;
  className?: string;
};

function Spinner({ size, color, className }: SpinnerProps) {
  return (
    <svg
      id="Outline"
      className={`animate-spin ${size || 'h-12 w-12'} ${color || 'fill-blue-400'} opacity-70 ${className}`}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="m12 24a12 12 0 1 1 10.714-17.41 1 1 0 1 1 -1.785.9 10 10 0 1 0 -.011 9.038 1 1 0 0 1 1.781.908 11.955 11.955 0 0 1 -10.699 6.564z" />
    </svg>
  );
}

export default React.memo(Spinner);
