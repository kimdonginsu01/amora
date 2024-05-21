import { ServiceCard } from "@/sanity.types";
import { getHomePageContactInfo, getServiceDetails, getServices } from "@/sanity/lib/api";
import { Image } from "sanity";
import { InformationService } from "../../components/InformationService";
import MinimalHero from "../../components/MinimalHero";

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
  const service = await getServiceDetails(params.slug);
  const contactInfo = await getHomePageContactInfo();

  return (
    <div>
      <MinimalHero image={service.image as Image} heading={service.title ?? ""} />
      <InformationService details={service as ServiceCard} contactInfo={contactInfo} />
    </div>
  );
};

export default DetailService;
