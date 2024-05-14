import ServiceCard from "./ServiceCard";
import SectionHeading from "./ui/SectionHeading";

const Service = () => {
  return (
    <div className="px-section-x py-section-y">
      <SectionHeading
        className="text-section-description"
        subHeading="OUR SERVICES"
        heading="Popular Procedures"
        description={`Escape from the hustle and bustle of the megapolis at Amora Spa. Whether you are searching for a "massage in Dubai near me" or want to unwind at one of the city's best spas, our services help you restore harmony to your body and soul.`}
      />
      <div className="grid grid-cols-2 gap-5">
        <ServiceCard />
        <ServiceCard />
      </div>
    </div>
  );
};

export default Service;
