import ServiceCard from "./ServiceCard";
import Button from "./ui/Button";
import SectionHeading from "./ui/SectionHeading";
import SectionWrapper from "./ui/SectionWrapper";

const Service = () => {
  return (
    <SectionWrapper>
      <SectionHeading
        className="text-section-description"
        subHeading="OUR SERVICES"
        heading="Popular Procedures"
        description={`Escape from the hustle and bustle of the megapolis at Amora Spa. Whether you are searching for a "massage in Dubai near me" or want to unwind at one of the city's best spas, our services help you restore harmony to your body and soul.`}
      />
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
        <ServiceCard />
        <ServiceCard />
      </div>

      <div className="flex justify-center mt-12">
        <Button variant="primary">All Services</Button>
      </div>
    </SectionWrapper>
  );
};

export default Service;
