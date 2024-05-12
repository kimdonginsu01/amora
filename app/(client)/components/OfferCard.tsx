import Image from "next/image";
import React, { HTMLAttributes } from "react";
import imgPath from "@/public/offer_card_1.png";
import Button from "./ui/Button";
import cn from "../utils/cn";

const OfferCard = ({ className, ...props }: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div className={cn("border border-offer-card flex flex-col", className)} {...props}>
      <div className="relative">
        <Image className="w-full object-cover" alt="offer" src={imgPath} />
        <p
          className="
            absolute
            bottom-0
            left-0
            right-0
            h-7
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
          20% off
        </p>
      </div>
      <div className="py-8 px-6 text-center">
        <h2 className="text-primary text-2xl tracking-base">
          Bassaline Massage
        </h2>
        <div className="h-[1px] mt-3 bg-gradient-to-r from-transparent via-primary"></div>
        <p className="font-red-hat text-light-dark line-clamp-2 mt-4">
          Balinese massage combines thumb pressure and stretching to alleviate
          Balinese massage combines thumb pressure and stretching to alleviate
          Balinese massage combines thumb pressure and stretching to alleviate
          ...
        </p>
        <Button className="w-full mt-4" variant="dark">
          Book now
        </Button>
      </div>
    </div>
  );
};

export default OfferCard;
