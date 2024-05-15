import Image from "next/image";
import React, { HTMLAttributes } from "react";
import imgPath from "@/public/offer_card_1.png";
import Button from "./ui/Button";
import cn from "../utils/cn";
import HorizontalDevider from "./ui/HorizontalDivider";

interface Props extends HTMLAttributes<HTMLDivElement> {
  active?: boolean;
  data?: any;
}

const OfferCard = ({ data, className, ...props }: Props) => {
  return (
    <div
      className={cn("border border-offer-card flex flex-col", className)}
      {...props}
    >
      <div className="relative">
        <Image className="w-full object-cover" alt="offer" src={data.imgPath} />
        <p
          className="
            absolute
            bottom-0
            left-0
            right-0
            h-8
            uppercase
            text-primary
            bg-white/10
            font-red-hat
            font-medium
            text-center
            content-center
            text-lg
            tracking-base
            "
        >
          {data.discount}
        </p>
      </div>
      <div className="pt-6 pb-8 px-6 text-center">
        <h2 className="text-primary text-2xl tracking-base">{data.title}</h2>
        <HorizontalDevider variant="primary" className="mt-3" />
        <p className="font-red-hat text-light-dark line-clamp-2 mt-4">
          {data.description}
        </p>
        <Button className="w-full mt-4" variant="dark">
          Book now
        </Button>
      </div>
    </div>
  );
};

export default OfferCard;
