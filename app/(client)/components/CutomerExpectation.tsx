import {
  ExpectationItem,
  CustomerExpectation as SCustomerExpectation
} from "@/sanity.types";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import { Image as SImage } from "sanity";
import SectionWrapper from "./ui/SectionWrapper";

interface Props {
  data: SCustomerExpectation;
}

const CutomerExpectation = ({ data }: Props) => {
  return (
    <SectionWrapper variant="black">
      <div className="grid items-center text-white">
        <h3 className="text-xl-42 text-primary text-center mb-14">
          {data.heading}
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {data?.items?.length &&
            data.items.map((item: ExpectationItem, idx: number) => (
              <div key={idx} className="flex flex-col items-center">
                {item.icon?.asset && (
                  <Image
                    src={urlForImage(item.icon as SImage)}
                    className="h-[80px] w-[80px]"
                    alt=""
                    width={160}
                    height={160}
                  />
                )}
                <h3 className="text-2xl text-primary">{item.title}</h3>
                <p className="text-center font-red-hat px-9 mt-[4px] text-light-dark">
                  {item.description}
                </p>
              </div>
            ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default CutomerExpectation;
