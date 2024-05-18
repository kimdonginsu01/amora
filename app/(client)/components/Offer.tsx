import { Offers } from "@/sanity.types";
import { client } from "@/sanity/lib/client";
import { EmblaCarousel } from "./ui/Carousel";
import SectionHeading from "./ui/SectionHeading";
import SectionWrapper from "./ui/SectionWrapper";

const getOffers = async () => {
  const query = `
  *[_type == "page" && _id == "d0ea95e0-4d11-4406-8cf5-01134ad272a1"]
    .pageBuilder[_type == "offers"][0]  {
      subHeading,
      heading,
      description,
      offers[]-> {
        discount,
        image,
        title,
        excerpt,
        slug,
      }
    }
  `;

  const [data] = await client.fetch<Offers[]>(query);
  return data;
};

const Offer = async () => {
  const data = await getOffers();

  return (
    <SectionWrapper variant="dark">
      <SectionHeading
        className="text-light-dark"
        subHeading={data.subHeading ?? ""}
        heading={data.heading ?? ""}
        description={data.description}
      />

      <div className="mt-9">
        {data.offers && (
          <EmblaCarousel slides={data.offers} options={{ loop: true }} />
        )}
      </div>
    </SectionWrapper>
  );
};

export default Offer;
