import {
  ContactInfo,
  ServiceCard as SServiceCard,
  Services,
} from "@/sanity.types";
import { client } from "@/sanity/lib/client";
import ServiceCard from "./ServiceCard";
import Button from "./ui/Button";
import SectionHeading from "./ui/SectionHeading";
import SectionWrapper from "./ui/SectionWrapper";
import { revalidatePath } from "next/cache";
import Link from "next/link";

revalidatePath("/");

const getPopularServices = async () => {
  const query = `
    {
      "popularServices": *[_type == "page" && _id == "d0ea95e0-4d11-4406-8cf5-01134ad272a1"]
                            .pageBuilder[_type == "services"][0] {
        subHeading,
        heading,
        description,
        popularServices[]->{
          image,
          title,
          slug,
          excerpt,
          pricings[] {
            time,
            price
          }
        }
      },
      "contactInfo": *[_type == "contactInfo" 
                        && _id in ["524f47be-2f69-4eaf-9c36-80b5b172dba4", "5393bffa-ca82-41f1-9fdf-ff97825d6a3e"]
                        && withAction == true
                      ] {
        title,
        icon,
        href,
      }
    }
  `;

  const data = await client.fetch<{
    popularServices: Services[];
    contactInfo: ContactInfo[];
  }>(query);
  return data;
};

const Service = async () => {
  const { popularServices, contactInfo } = await getPopularServices();
  const data = { ...popularServices[0], contactInfo };

  return (
    <SectionWrapper>
      <SectionHeading
        className="text-section-description"
        subHeading={data.subHeading ?? ""}
        heading={data.heading ?? ""}
        description={data.description}
      />
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5">
        {data.popularServices &&
          data.popularServices.map((service, index) => (
            <ServiceCard
              key={index}
              data={service as unknown as SServiceCard}
              contacts={data.contactInfo}
            />
          ))}
      </div>

      <div className="flex justify-center mt-12">
        <Button variant="primary">
          <Link href="/service">All Services</Link>
        </Button>
      </div>
    </SectionWrapper>
  );
};

export default Service;
