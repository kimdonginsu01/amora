import IServiceContent, { SERVICES } from "@/constain";
import Image from "next/image";
import SectionWrapper from "./ui/SectionWrapper";

const CutomerExpectation = () => {
  return (
    <SectionWrapper variant="black">
      <div className="grid items-center text-white">
        <h3 className="text-xl-42 text-primary text-center mb-14">
          Here&apos;s what you can expect at Amora Spa
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {SERVICES.map((item: IServiceContent, idx: number) => (
            <div key={idx} className="flex flex-col items-center">
              <Image
                src={item.icon}
                className="h-[80px] w-[80px]"
                alt=""
                width={160}
                height={160}
              />
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
