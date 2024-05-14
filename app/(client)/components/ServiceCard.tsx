import React from "react";
import imgPath from "@/public/service_card_1.png";
import Image from "next/image";
import HorizontalDevider from "./ui/HorizontalDevider";
import Button from "./ui/Button";
import { PhoneIcon, WhatsAppIcon } from "./Icons";

const ServiceCard = () => {
  return (
    <div>
      <Image alt="service" src={imgPath} style={{ width: "100%" }} />
      <div>
        <h2 className="text-primary">Lomi Lomi Massage</h2>
        <HorizontalDevider variant="dark" />
        <div className="flex font-red-hat">
          <p>
            Book a 60-minute Swedish massage for 390 AED and receive an
            additional 15 minutes free.
          </p>
          <div>
            <div className="text-nowrap">
              <span>60 min</span>
              <span>690AED</span>
            </div>
            <div className="text-nowrap">
              <span>60 min</span>
              <span>690AED</span>
            </div>
          </div>
        </div>
        <div className="flex items-center">
          <Button variant="dark">READ MORE</Button>
          <Button variant="dark">
            <WhatsAppIcon />
          </Button>
          <Button variant="dark">
            <PhoneIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
