import React from "react";

import IServiceContent, { SERVICES } from "@/constain";
import HeroBanner from "../components/HeroBanner/HeroBanner";

const ServicePage = () => {
  const services = [{}];
  return (
    <div>
      <HeroBanner />
      <div className="px-section-x py-section-y grid grid-cols-10 items-center">
        <div className="space-y-4 col-span-4">
          <h2 className="text-primary text-xl-32">
            Welcome to the AMORA Spa Center
          </h2>
          <p className="font-red-hat">
            We offer a unique Dubai massage spa experience combining the finest
            European and Oriental traditions. The Amora Spa team guarantees high
            service and exceptional quality of all procedures.
          </p>
          <p className="font-red-hat">
            Our expert therapists aim to create an oasis of tranquillity in a
            bustling city. Whether you’re looking for a comprehensive spa
            experience, a rejuvenating body treatment, or simply the best
            massage in Dubai, our centre is the place to be.
          </p>
        </div>
        <div className="spacer"></div>
        <div className="col-span-5 h-full">
          <div className="p-3 border-[1px] border-[#A28869] rounded-[76px]">
            <div>
              <img
                src="https://www.discovermassage.com.au/wp-content/uploads/2017/06/Post-Massage-Care-Getting-The-Most-Out-Of-Your-Massage.jpg"
                alt=""
                className="w-full h-[400px] object-cover rounded-[68px]"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="px-section-x py-section-y grid items-center bg-[#0E0E0E] text-white">
        <h3 className="text-[42px] text-[#A28869] text-center mb-[60px]">
          Here&apos;s what you can expect at Amora Spa
        </h3>
        <div className="grid grid-cols-3 gap-4 ">
          {SERVICES.map((item: IServiceContent, idx: number) => (
            <div key={idx} className="flex flex-col items-center">
              <img src={item.icon} className="h-[80px] w-[80px]" alt="" />
              <h3 className="text-[24px] text-[#A28869]">{item.title}</h3>
              <p className="max-w-[300px] text-center font-red-hat mt-[4px] text-[#A6A6A6]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicePage;
