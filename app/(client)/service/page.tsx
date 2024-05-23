import { baseOpenGraph } from "@/app/shared-metadata";
import { getMinimalHero, getSiteMeta } from "@/sanity/lib/api";
import { servicePageId } from "@/sanity/lib/queries";
import { Metadata } from "next";
import { Image } from "sanity";
import FooterBanner from "../components/FooterBanner";
import MainServices from "../components/MainServices";
import MinimalHero from "../components/MinimalHero";

export async function generateMetadata(): Promise<Metadata> {
  const siteMeta = await getSiteMeta(servicePageId);

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
