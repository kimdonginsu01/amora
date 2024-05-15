import Image from "next/image";
import React from "react";
import bannerImg from "@/public/footer_banner.png";

const FooterBanner = () => {
  return (
    <div className="relative">
      <Image alt="footer banner" src={bannerImg} />
      <p className="text-primary text-xl-42 absolute top-1/2 -translate-y-1/2 ml-section-x max-w-[318px]">
        50% OFF Aroma and Jet Hydrotherapy!
      </p>
    </div>
  );
};

export default FooterBanner;
