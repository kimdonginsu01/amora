import Image from "next/image";
import React from "react";

const MinimalHero = () => {
  return (
    <div className="h-[50svh] md:h-96 relative">
      <div className="bg-img-hero-banner w-full h-full absolute"></div>
      <Image
        src="https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2023/10/10173641/HIFI-Representative-Image-for-Spa-New-Africa-Shutterstock-1600x900.jpg"
        alt="Ảnh minh hoạ"
        className="w-full h-full object-cover"
        width={1600}
        height={900}
      />
      <div className="
        absolute
        top-1/2
        -translate-y-1/2
        left-1/2
        -translate-x-1/2
        text-5xl
        text-white
        text-center
        tracking-base">
        About Us
      </div>
    </div>
  );
};

export default MinimalHero;
