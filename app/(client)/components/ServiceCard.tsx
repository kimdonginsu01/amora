import React from "react";
import imgPath from "@/public/service_card_1.png";
import Image from "next/image";
import HorizontalDevider from "./ui/HorizontalDivider";
import Button from "./ui/Button";
import { PhoneIcon, WhatsAppIcon } from "./Icons";

const ServiceCard = () => {
  return (
    <div className="border border-offer-card/40">
      <Image alt="service" src={imgPath} style={{ width: "100%" }} />
      <div className="p-3 md:p-8">
        <h2 className="text-primary text-2xl font-medium">Lomi Lomi Massage</h2>
        <HorizontalDevider className="mt-4" variant="dark" />
        <div className="flex flex-wrap md:justify-between font-red-hat text-light-dark mt-6">
          <p className="w-full md:w-3/5">
            Book a 60-minute Swedish massage for 390 AED and receive an
            additional 15 minutes free.
          </p>
          <div className="mt-3 md:mt-unset">
            <div className="text-nowrap flex justify-between">
              <span className="mr-6">60 min</span>
              <span className="font-bold">690AED</span>
            </div>
            <div className="text-nowrap flex justify-between">
              <span className="mr-6">60 min</span>
              <span className="font-bold">690AED</span>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap-reverse md:justify-between mt-7 gap-y-4">
          <Button variant="dark" className="w-full md:w-unset">READ MORE</Button>
          <div className="flex justify-center h-full w-full md:w-unset">
            <Button className="!p-3" variant="dark">
              <WhatsAppIcon />
            </Button>
            <Button className="!p-3" variant="dark">
              <PhoneIcon />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
