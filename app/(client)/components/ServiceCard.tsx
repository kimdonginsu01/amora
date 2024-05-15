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
      <div className="p-8">
        <h2 className="text-primary text-2xl font-medium">Lomi Lomi Massage</h2>
        <HorizontalDevider className="mt-4" variant="dark" />
        <div className="flex justify-between font-red-hat text-light-dark mt-6">
          <p className="w-3/5">
            Book a 60-minute Swedish massage for 390 AED and receive an
            additional 15 minutes free.
          </p>
          <div className="">
            <div className="text-nowrap flex justify-between">
              <span className="mr-6">60 min</span>
              <span className="font-bold">690AED</span>
            </div>
            <div className="text-nowrap flex justify-between mt-4">
              <span className="mr-6">60 min</span>
              <span className="font-bold">690AED</span>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between mt-7">
          <Button variant="dark">READ MORE</Button>
          <div className="flex items-center h-full">
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
