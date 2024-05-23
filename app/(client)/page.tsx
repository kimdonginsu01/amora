import { getSiteMeta } from "@/sanity/lib/api";
import { homePageId } from "@/sanity/lib/queries";
import type { Metadata } from "next";
import { baseOpenGraph } from "../shared-metadata";
import AboutUs from "./components/AboutUs";
import FooterBanner from "./components/FooterBanner";
import Hero from "./components/Hero";
import Offer from "./components/Offer";
import PopularService from "./components/PopularService";
import Testimonials from "./components/Testimonials";

export async function generateMetadata(): Promise<Metadata> {
  const siteMeta = await getSiteMeta(homePageId);

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

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <Offer />
      <PopularService />
      <Testimonials />
      <FooterBanner />
    </>
  );
}
