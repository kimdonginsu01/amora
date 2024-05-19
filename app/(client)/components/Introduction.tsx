import { Introduction as SIntroduction } from "@/sanity.types";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import { Image as SImage, TypedObject } from "sanity";
import SectionWrapper from "./ui/SectionWrapper";

interface Props {
  data: SIntroduction;
}

const Introduction = ({ data }: Props) => {
  return (
    <SectionWrapper>
      <div className="flex flex-wrap justify-between items-center gap-y-5">
        <div className="w-full md:w-5/12 text-center md:text-left">
          <h2 className="text-primary text-xl-32">
            {data.heading}
          </h2>
          <div className="font-red-hat mt-5">
            <PortableText value={data.body as TypedObject[]} />
          </div>
        </div>
        <div className="w-full md:w-5/12">
          <div className="p-3 border-[1px] border-[#A28869] rounded-[76px]">
            <div>
              {data.image?.asset && <Image
                src={urlForImage(data.image as SImage)}
                alt={data.heading ?? ""}
                className="w-full h-[400px] object-cover rounded-[68px]"
                height={785}
                width={785}
              />}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Introduction;
