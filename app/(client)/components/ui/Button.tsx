import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode } from "react";
import cn from "../../utils/cn";

interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
  variant: "primary" | "light" | "outline";
}

const Button = ({ children, className, variant, ...props }: Props) => {
  return (
    <button
      type="button"
      className={cn(buttonVariants({ variant, className }))}
      {...props}
    >
      {children}
    </button>
  );
};

const buttonVariants = cva("font-red-hat text-2xl px-button-x py-button-y", {
  variants: {
    variant: {
      primary: "bg-primary text-white",
      light: "bg-white text-black",
      outline: "border border-white",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

export default Button;
