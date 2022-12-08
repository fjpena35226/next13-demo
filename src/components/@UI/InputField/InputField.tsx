import React from "react";

type InputFieldProps = {
  className?: string;
  value?: string;
  [x: string]: any;
};

function InputField({ className, value, ...rest }: InputFieldProps) {
  return (
    <input {...rest} className={`h-[50px] rounded-md bg-white w-full border border-gray-100 px-3 ${className}`} />
  );
}

export default InputField;
