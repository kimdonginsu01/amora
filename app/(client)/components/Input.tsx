"use client";

import { InputHTMLAttributes } from "react";
import { ErrorIcon } from "./Icons";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
  className?: string;
  type?: string;
  isNumber?: boolean;
  name?: string;
  errorMessage?: string | null;
}

export default function Input({
  className = "",
  type = "text",
  errorMessage,
  isNumber,
  onChange,
  ...props
}: InputProps) {
  return (
    <div className={"font-red-hat"}>
      <input
        type={type}
        className={
          " block w-full h-[62px] text-white text-[inherit] border bg-[#141215] transition-[0.35s] duration-[ease] px-5 py-0 border-solid border-[rgba(166,166,166,0.3)] focus:border-[#a28869] active:border-[#a28869]"
        }
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
