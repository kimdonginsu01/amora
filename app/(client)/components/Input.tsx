"use client";

import React from "react";
import { ErrorIcon } from "./Icons";

interface InputProps {
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  type?: string;
  isNumber?: boolean;
  name?: string;
  errorMessage?: string | null;
  defaultValue?: string;
}

export default function Input({
  defaultValue,
  value,
  className = "",
  type = "text",
  errorMessage,
  isNumber,
  onChange,
  ...props
}: InputProps) {
  const handleOnChange = (event: any) => {
    if (onChange) {
      onChange(event);
    }
  };

  return (
    <div className={"font-red-hat"}>
      <input
        type={type}
        className={
          " block w-full h-[62px] text-white text-[inherit] border bg-[#141215] transition-[0.35s] duration-[ease] px-5 py-0 border-solid border-[rgba(166,166,166,0.3)] focus:border-[#a28869] active:border-[#a28869]"
        }
        onChange={handleOnChange}
        {...props}
      />

      {errorMessage && (
        <div
          className={
            "error-wrapper flex items-center text-[14px] text-[#E02727] mt-2"
          }
        >
          <i>
            <ErrorIcon />
          </i>
          <div className={"error-message ml-2"}>{errorMessage}</div>
        </div>
      )}
    </div>
  );
}
