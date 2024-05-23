import { baseOpenGraph } from "@/app/shared-metadata";
import {
  getCustomerExpectation,
  getIntroduction,
  getMinimalHero,
  getSiteMeta,
} from "@/sanity/lib/api";
import { aboutUsPageId } from "@/sanity/lib/queries";
import { Metadata } from "next";
import { Image } from "sanity";
import CutomerExpectation from "../components/CutomerExpectation";
import Introduction from "../components/Introduction";
import MinimalHero from "../components/MinimalHero";

export async function generateMetadata(): Promise<Metadata> {
  const siteMeta = await getSiteMeta(aboutUsPageId);

  return {
    title: siteMeta?.pageTitle,
    description: siteMeta?.description,
    openGraph: {
      ...baseOpenGraph,
      title: `${siteMeta?.pageTitle}`,
      description: `${siteMeta?.description}`,
      url: `${siteMeta?.openGraph.basic.url}`,
      siteName: `${siteMeta?.openGraph.optional.site_name}`,
      images: [
        {
          url: `${siteMeta?.openGraph.basic.image}`,
        },
      ],
    },
    alternates: {
      canonical: siteMeta?.canonical,
    },
  };
}

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
