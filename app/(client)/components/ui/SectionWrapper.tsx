import { VariantProps, cva } from "class-variance-authority";
import React, { HTMLAttributes } from "react";
import cn from "../../utils/cn";

interface Props
  extends HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof wrapperVariants> {
  variant?: "dark" | "white" | "black";
}

const SectionWrapper = ({ variant, className, children, ...props }: Props) => {
  return (
    <div className={cn(wrapperVariants({ variant }))} {...props}>
      <div
        className={cn(
          "max-w-content mx-auto px-4 py-8 md:px-section-x md:py-section-y",
          className
        )}
      >
        {children}
      </div>
    </div>
  );
};

const wrapperVariants = cva("w-full", {
  variants: {
    variant: {
      dark: "bg-[#212121] text-white",
      black: "bg-[#0E0E0E] text-white",
      white: "bg-white text-black",
    },
  },
  defaultVariants: {
    variant: "white",
  },
});

export default SectionWrapper;
