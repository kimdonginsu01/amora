import React, { HTMLAttributes } from "react";
import cn from "../../utils/cn";

interface Props extends HTMLAttributes<HTMLDivElement> {
  subHeading: string;
  heading: string;
  description?: string;
}

const SectionHeading = ({
  className,
  subHeading,
  heading,
  description,
}: Props) => {
  return (
    <div className={cn("text-center max-w-[582px] mx-auto", className)}>
      <h3 className="font-red-hat">{subHeading}</h3>
      <h2 className="text-primary text-xl-42 mt-4">{heading}</h2>
      <p className="font-red-hat mt-8">{description}</p>
    </div>
  );
};

export default SectionHeading;
