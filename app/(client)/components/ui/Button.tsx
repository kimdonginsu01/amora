import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, ReactNode } from "react";
import cn from "../../utils/cn";

interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  children: ReactNode;
  variant: "primary" | "light" | "outline" | "dark";
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

const buttonVariants = cva(
  `
  font-red-hat
  text-lg md:text-2xl
  px-4 md:px-button-x
  py-2 md:py-button-y
  transition-all
  ease-in-out
  duration-300
  border
  shadow-xl
  min-w-fit
  `,
  {
    variants: {
      variant: {
        primary:
          "border-primary bg-primary text-white hover:border-white hover:bg-white hover:text-black",
        light:
          "border-white bg-white text-black hover:bg-primary hover:text-white hover:border-primary",
        dark: "border-light-dark bg-light-dark text-primary hover:bg-primary hover:border-primary hover:text-white",
        outline: "border-white hover:bg-white hover:text-black",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  }
);

export default Button;
