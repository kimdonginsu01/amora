import { getLocation, getMinimalHero, getSiteMeta } from "@/sanity/lib/api";
import FooterBanner from "../components/FooterBanner";
import OurContact from "../components/OurContact";
import { contactUsPageId } from "@/sanity/lib/queries";
import { Image } from "sanity";
import MinimalHero from "../components/MinimalHero";
import { baseOpenGraph } from "@/app/shared-metadata";
import type { Metadata } from "next";

export async function generateMetadata(): Promise<Metadata> {
  const siteMeta = await getSiteMeta(contactUsPageId);

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
