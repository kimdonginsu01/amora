import { getHomePageOffer } from "@/sanity/lib/api";
import { EmblaCarousel } from "./ui/Carousel";
import SectionHeading from "./ui/SectionHeading";
import SectionWrapper from "./ui/SectionWrapper";

const Offer = async () => {
  const data = await getHomePageOffer();

  return (
    <SectionWrapper variant="dark">
      <SectionHeading
        className="text-light-dark"
        subHeading={data.subHeading ?? ""}
        heading={data.heading ?? ""}
        description={data.description}
      />

      <div className="mt-9">
        {data.offers && (
          <EmblaCarousel slides={data.offers} options={{ loop: true }} />
        )}
      </div>
    </SectionWrapper>
  );
};

export default Offer;
