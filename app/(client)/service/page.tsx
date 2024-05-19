import { getMinimalHero } from "@/sanity/lib/api";
import { servicePageId } from "@/sanity/lib/queries";
import { Image } from "sanity";
import FooterBanner from "../components/FooterBanner";
import MainServices from "../components/MainServices";
import MinimalHero from "../components/MinimalHero";

const ServicePage = async () => {
  const minimalHero = await getMinimalHero(servicePageId);

  return (
    <div>
      <MinimalHero
        image={minimalHero.image as Image}
        heading={minimalHero.heading ?? ""}
      />
      <MainServices />
      <FooterBanner />
    </div>
  );
};

export default ServicePage;
