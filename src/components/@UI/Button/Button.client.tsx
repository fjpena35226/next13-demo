"use client";
import React from "react";
import SpinnerClient from "../Spinner/Spinner.client";

type ButtonProps = {
  className?: string;
  color?: string;
  children?: React.ReactNode;
  isLoading?: boolean;
  iconBtn?: boolean;
  [x: string]: any;
};

function Button({
  className,
  children,
  color,
  isLoading,
  iconBtn,
  ...rest
}: ButtonProps) {
  return (
    <button
      className={`flex items-center justify-center h-[50px] rounded-md ${
        color || "bg-blue-500"
      } text-white px-4 ${!iconBtn ? "min-w-[160px]" : ""} ${
        isLoading ? "disabled" : ""
      } ${className || ""}`}
      role="button"
      {...rest}
    >
      {isLoading && (
        <SpinnerClient color="fill-white" size="w-4 h-4" className="mr-2" />
      )}
      <span>{children}</span>
    </button>
  );
}

export default Button;
