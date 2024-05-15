import { VariantProps, cva } from "class-variance-authority";
import React, { HTMLAttributes, ReactNode } from "react";
import cn from "../../utils/cn";

interface Props
  extends HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof deviderVariants> {
  variant: "primary" | "dark";
}

const HorizontalDivider = ({ className, variant }: Props) => {
  return <div className={cn(deviderVariants({ variant, className }))}></div>;
};

const deviderVariants = cva("h-[1px] ", {
  variants: {
    variant: {
      primary: "bg-gradient-to-r from-transparent via-primary",
      dark: "bg-gradient-to-r from-transparent via-divider",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export default HorizontalDivider;
