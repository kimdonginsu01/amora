import { EmblaCarousel } from "./ui/Carousel";
import imgPath from "@/public/offer_card_1.png";
import imgPath2 from "@/public/offer_card_2.png";
import imgPath3 from "@/public/offer_card_3.png";
import SectionHeading from "./ui/SectionHeading";
import SectionWrapper from "./ui/SectionWrapper";

const slides = [
  {
    imgPath: imgPath,
    discount: "20%",
    title: "Bassaline Massage",
    description:
      "Balinese massage combines thumb pressure and stretching to alleviate ...",
  },
  {
    imgPath: imgPath2,
    discount: "20%",
    title: "Swedish Massage",
    description:
      "Book a 60-minute Swedish massage for 390 AED and receive an additional 15 minutes free.",
  },
  {
    imgPath: imgPath3,
    discount: "20%",
    title: "Free Scrubbing",
    description:
      "Get a free scrubbing session when you book a 60-minute hot stone massage...",
  },
  {
    imgPath: imgPath3,
    discount: "20%",
    title: "Free Scrubbing",
    description:
      "Get a free scrubbing session when you book a 60-minute hot stone massage...",
  },
];

const Offer = () => {
  return (
    <SectionWrapper variant="dark">
      <SectionHeading
          className="text-light-dark"
          subHeading="GET A DISCOUNT"
          heading="Special Offers"
          description="Are you looking for affordable massage prices in Dubai? Explore our
          current promotions and discover deals to suit your budget."
        />

        <div className="mt-9">
          <EmblaCarousel slides={slides} options={{ loop: true }} />
        </div>
    </SectionWrapper>
  );
};

export default Offer;
