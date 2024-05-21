import {
  getCustomerExpectation,
  getIntroduction,
  getMinimalHero,
} from "@/sanity/lib/api";
import { aboutUsPageId } from "@/sanity/lib/queries";
import { Image } from "sanity";
import CutomerExpectation from "../components/CutomerExpectation";
import Introduction from "../components/Introduction";
import MinimalHero from "../components/MinimalHero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "About us",
};

const AboutUsPage = async () => {
  const minimalHero = await getMinimalHero(aboutUsPageId);
  const introduction = await getIntroduction(aboutUsPageId);
  const customerExpectation = await getCustomerExpectation(aboutUsPageId);

  return (
    <div>
      <MinimalHero
        image={minimalHero.image as Image}
        heading={minimalHero.heading ?? ""}
      />
      <Introduction data={introduction} />
      <CutomerExpectation data={customerExpectation} />
    </div>
  );
};

export default AboutUsPage;
