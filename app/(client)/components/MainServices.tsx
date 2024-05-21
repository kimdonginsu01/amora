import { ServiceCard as SServiceCard } from "@/sanity.types";
import { getHomePageContactInfo, getMainServices } from "@/sanity/lib/api";
import ServiceCard from "./ServiceCard";
import SectionHeading from "./ui/SectionHeading";
import SectionWrapper from "./ui/SectionWrapper";

const MainServices = async () => {
  const { headings, services } = await getMainServices();
  const contactInfo = await getHomePageContactInfo();

  return (
    <SectionWrapper variant="black">
    <SectionHeading
        subHeading={headings?.subHeading ?? ""}
        heading={headings?.heading ?? ""}
      />
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
        {services.length &&
          services.map((service, index) => (
            <ServiceCard
              key={index}
              data={service as unknown as SServiceCard}
              contacts={contactInfo}
            />
          ))}
      </div>
    </SectionWrapper>
  );
};

export default MainServices;
