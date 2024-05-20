import { getLocation, getMinimalHero } from "@/sanity/lib/api";
import FooterBanner from "../components/FooterBanner";
import OurContact from "../components/OurContact";
import { contactUsPageId } from "@/sanity/lib/queries";
import { Image } from "sanity";
import MinimalHero from "../components/MinimalHero";

const ContactPage = async () => {
  const minimalHero = await getMinimalHero(contactUsPageId);
  const location = await getLocation(contactUsPageId);
  return (
    <div>
      <MinimalHero
        image={minimalHero.image as Image}
        heading={minimalHero.heading ?? ""}
      />
      <OurContact data={location} />
      <FooterBanner />
    </div>
  );
};

export default ContactPage;
