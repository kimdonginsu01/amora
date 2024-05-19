import { ServiceCard as SServiceCard } from "@/sanity.types";
import { getHomePageContactInfo, getPopularServices } from "@/sanity/lib/api";
import Link from "next/link";
import ServiceCard from "./ServiceCard";
import Button from "./ui/Button";
import SectionHeading from "./ui/SectionHeading";
import SectionWrapper from "./ui/SectionWrapper";

const PopularService = async () => {
  const popularServices = await getPopularServices();
  const contactInfo = await getHomePageContactInfo();
  const data = { ...popularServices, contactInfo };

  return (
    <SectionWrapper>
      <SectionHeading
        className="text-section-description"
        subHeading={data.subHeading ?? ""}
        heading={data.heading ?? ""}
        description={data.description}
      />
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
        {data.popularServices &&
          data.popularServices.map((service, index) => (
            <ServiceCard
              key={index}
              data={service as unknown as SServiceCard}
              contacts={data.contactInfo}
            />
          ))}
      </div>

      <div className="flex justify-center mt-12">
        <Link href="/service">
          <Button variant="primary">All Services</Button>
        </Link>
      </div>
    </SectionWrapper>
  );
};

export default PopularService;
