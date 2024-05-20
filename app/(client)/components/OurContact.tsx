import { ContactInfo, Location } from "@/sanity.types";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import { Image as SImage } from "sanity";
import SectionWrapper from "./ui/SectionWrapper";

interface Props {
  data: Location;
}

const OurContact = ({ data }: Props) => {
  return (
    <SectionWrapper>
      <div className=" gap-[20px] lg:flex">
        <div className="lg:w-2/5 w-full bg-[#212121] p-8">
          <h2 className="text-primary text-xl-32">{data.heading}</h2>
          <p className="font-red-hat text-white mt-2 mb-[38px] font-light">
            {data.description}
          </p>
          <div className="flex flex-col gap-8">
            {data?.contactInfos?.length &&
              (data.contactInfos as unknown as ContactInfo[]).map(
                (item, idx) => (
                  <div
                    className="px-8 py-4 border-solid border-[1px] border-[#5A5A5A] gap-[20px]"
                    key={idx}
                  >
                    <div className="inline-block mr-4">
                      <div className="w-14 h-14 bg-light-dark flex item-center justify-center">
                        {item.icon?.asset && (
                          <Image
                            className="object-contain p-2"
                            src={urlForImage(item.icon as SImage)}
                            alt={item.title ?? ""}
                            width={40}
                            height={40}
                          />
                        )}
                      </div>
                    </div>
                    <div className="inline-block md:w-4/6">
                      <h6 className="text-primary mb-2 tracking-[1px]">
                        {item.title}
                      </h6>
                      {item?.details?.length &&
                        item.details.map((itemDesc, idx) => (
                          <p
                            className="font-red-hat font-normal text-[#817878]"
                            key={idx}
                          >
                            {itemDesc}
                          </p>
                        ))}
                    </div>
                  </div>
                )
              )}
          </div>
        </div>
        <div
          className="lg:w-3/5 w-full flex items-center"
          dangerouslySetInnerHTML={{ __html: data.embedMap ?? "" }}
        ></div>
      </div>
    </SectionWrapper>
  );
};

export default OurContact;
