import Image from "next/image";
import React from "react";
import bannerImg from "@/public/footer_banner.png";

const FooterBanner = () => {
  return (
    <div className="relative">
      <Image
        alt="footer banner"
        src={bannerImg}
        className="min-h-[50svh] md:min-h-unset object-cover w-full"
      />
      <div className="absolute top-0 right-0 bottom-0 left-0">
        <div
          className="max-w-content mx-auto px-4 md:px-section-x h-full flex items-center justify-center md:justify-start"
        >
          <p
            className="text-primary
            text-center md:text-left
            text-xl-42
            max-w-[318px]"
          >
            50% OFF Aroma and Jet Hydrotherapy!
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
