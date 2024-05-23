import { baseOpenGraph } from "@/app/shared-metadata";
import { ServiceCard } from "@/sanity.types";
import {
  getHomePageContactInfo,
  getServiceDetails,
  getServices,
} from "@/sanity/lib/api";
import { Metadata } from "next";
import { cache } from "react";
import { Image } from "sanity";
import { InformationService } from "../../components/InformationService";
import MinimalHero from "../../components/MinimalHero";

const getCacheServiceDetail = cache(getServiceDetails);

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = await getCacheServiceDetail(params.slug);

  return {
    title: service?.title,
    description: service?.excerpt,
    openGraph: {
      ...baseOpenGraph,
      title: `${service?.title}`,
      description: `${service?.excerpt}`,
      // url: `${siteMeta?.openGraph.basic.url}`,
      images: [
        {
          url: `${service?.ogImage}`,
        },
      ],
    },
  };
}

export async function generateStaticParams() {
  const services = await getServices();

  return services.map((service) => ({
    slug: service?.slug?.current,
  }));
}

interface Props {
  params: { slug: string };
}

const DetailService = async ({ params }: Props) => {
  const service = await getCacheServiceDetail(params.slug);
  const contactInfo = await getHomePageContactInfo();

  return (
    <div>
      <MinimalHero
        image={service?.image as Image}
        heading={service?.title ?? ""}
      />
      <InformationService
        details={service as unknown as ServiceCard}
        contactInfo={contactInfo}
      />
    </div>
  );
};

export default DetailService;
