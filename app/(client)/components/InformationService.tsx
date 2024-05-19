import { ContactInfo, ServiceCard } from "@/sanity.types";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import { Image as SImage } from "sanity";
import ServiceDetails from "./ServiceDetails";
import SectionWrapper from "./ui/SectionWrapper";

interface Props {
  details: ServiceCard;
  contactInfo: ContactInfo[];
}

export const InformationService = ({ details, contactInfo }: Props) => {
  return (
    <SectionWrapper variant="black">
      <div className=" gap-[20px] lg:flex">
        <div className="lg:w-[40%] w-full bg-[#212121] h-[536px] relative font-red-hat">
          {details.image?.asset && (
            <Image
              alt={details.title ?? "Amora Spa"}
              src={urlForImage(details.image as SImage)}
              width={482}
              height={536}
              className="object-cover h-full w-full"
            />
          )}
          <div
            className="absolute w-full  text-xl backdrop-blur-[7.5px] py-5 bottom-0 bg-black] p-8"
            style={{ background: "rgba(0,0,0,0.7)" }}
          >
            {details.pricings?.length &&
              details.pricings.map((item, idx) => {
                return (
                  <div className="flex justify-between mb-2" key={idx}>
                    <p className="font-light">{item.time} minutes</p>{" "}
                    <p className="text-primary font-semibold">
                      {item.price} AED
                    </p>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="lg:w-[60%] w-full font-red-hat">
          <ServiceDetails details={details} contactInfo={contactInfo} />
        </div>
      </div>
    </SectionWrapper>
  );
};
