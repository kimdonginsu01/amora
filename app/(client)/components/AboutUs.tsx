import Button from "./ui/Button";
import SectionWrapper from "./ui/SectionWrapper";
import StyledImage from "./ui/StyledImage";

const AboutUs = () => {
  return (
    <SectionWrapper>
      <div
        className="
          grid grid-cols-10 items-center
          text-center md:text-left"
      >
        <div className="space-y-4 col-span-10 md:col-span-5">
          <h3 className="uppercase font-red-hat">About us</h3>
          <h2 className="text-primary text-xl-32">
            Welcome to the AMORA Spa Center
          </h2>
          <div className="md:hidden">
            <StyledImage />
          </div>
          <p className="font-red-hat">
            We offer a unique Dubai massage spa experience combining the finest
            European and Oriental traditions. The Amora Spa team guarantees high
            service and exceptional quality of all procedures. Our expert
            therapists aim to create an oasis of tranquillity in a bustling
            city. Whether you’re looking for a comprehensive spa experience, a
            rejuvenating body treatment, or simply the best massage in Dubai,
            our centre is the place to be.
          </p>
          <Button className="!mt-11" variant="primary">
            Learn more
          </Button>
        </div>
        <div className="spacer"></div>
        <div className="hidden md:block col-span-4 h-full content-center">
          <StyledImage />
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutUs;
