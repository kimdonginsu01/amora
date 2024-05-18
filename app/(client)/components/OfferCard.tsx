import { ServiceCard } from "@/sanity.types";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { HTMLAttributes } from "react";
import type { Image as SImage } from "sanity";
import cn from "../utils/cn";
import Button from "./ui/Button";
import HorizontalDevider from "./ui/HorizontalDivider";

interface Props extends HTMLAttributes<HTMLDivElement> {
  active?: boolean;
  data?: ServiceCard;
}

const OfferCard = ({ data, className, ...props }: Props) => {
  return (
    <div
      className={cn("border border-offer-card flex flex-col", className)}
      {...props}
    >
      <div className="relative">
        {data?.image?.asset && (
          <Image
            className="w-full object-cover md:h-50svh"
            alt="offer"
            src={urlForImage(data?.image as SImage)}
            width={352}
            height={310}
          />
        )}
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
          {data?.discount} %
        </p>
      </div>
      <div className="pt-6 pb-8 px-6 text-center">
        <h2 className="text-primary text-2xl tracking-base">{data?.title}</h2>
        <HorizontalDevider variant="primary" className="mt-3" />
        <p className="font-red-hat text-light-dark line-clamp-2 mt-4">
          {data?.excerpt}
        </p>
        <Button className="w-full mt-4" variant="dark">
          <Link href={`/service/${data?.slug?.current}`}>Book now</Link>
        </Button>
      </div>
    </div>
  );
};

export default OfferCard;
