import "./HeroBanner.css";
import React from "react";

const HeroBanner = () => {
  return (
    <div className="h-[380px] bg-black relative">
      <div className="bg-img-hero-banner w-full h-full absolute"></div>
      <img
        src="https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2023/10/10173641/HIFI-Representative-Image-for-Spa-New-Africa-Shutterstock-1600x900.jpg"
        alt="Ảnh minh hoạ"
        className="w-full h-full object-cover "
      />
      <div className="absolute top-1/2 right-1/2 text-[48px] text-white tracking-[8px] title-about-us">
        About Us
      </div>
    </div>
  );
};

export default HeroBanner;
