import Image from "next/image";
import React from "react";
import SectionWrapper from "./ui/SectionWrapper";

const Introduction = () => {
  return (
    <SectionWrapper>
      <div className="flex flex-wrap justify-between items-center gap-y-5">
        <div className="w-full md:w-5/12 text-center md:text-left">
          <h2 className="text-primary text-xl-32">
            Welcome to the AMORA Spa Center
          </h2>
          <div className="font-red-hat mt-5">
            <p>
              We offer a unique Dubai massage spa experience combining the
              finest European and Oriental traditions. The Amora Spa team
              guarantees high service and exceptional quality of all procedures.
            </p>
            <p>
              Our expert therapists aim to create an oasis of tranquillity in a
              bustling city. Whether you’re looking for a comprehensive spa
              experience, a rejuvenating body treatment, or simply the best
              massage in Dubai, our centre is the place to be.
            </p>
          </div>
        </div>
        <div className="w-full md:w-5/12">
          <div className="p-3 border-[1px] border-[#A28869] rounded-[76px]">
            <div>
              <Image
                src="https://www.discovermassage.com.au/wp-content/uploads/2017/06/Post-Massage-Care-Getting-The-Most-Out-Of-Your-Massage.jpg"
                alt=""
                className="w-full h-[400px] object-cover rounded-[68px]"
                height={785}
                width={785}
              />
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Introduction;
