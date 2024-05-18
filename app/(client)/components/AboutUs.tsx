import { client } from "@/sanity/lib/client";
import Button from "./ui/Button";
import SectionWrapper from "./ui/SectionWrapper";
import StyledImage from "./ui/StyledImage";
import { AboutUs as SAboutUs, Page } from "@/sanity.types";
import { Image, TypedObject } from "sanity";
import Link from "next/link";
import { PortableText } from "@portabletext/react";

const getAboutUs = async () => {
  const query = `
  *[_type == "page" && _id == "d0ea95e0-4d11-4406-8cf5-01134ad272a1"]
    .pageBuilder[_type == "aboutUs"][0]  {
      image,
      heading,
      subHeading,
      body,
      button {
        label, href, variant
      }
    }
  `;

  const [data] = await client.fetch<SAboutUs[]>(query);
  return data;
};

const AboutUs = async () => {
  const data = await getAboutUs();

  return (
    <SectionWrapper>
      <div
        className="
          grid grid-cols-10 items-center
          text-center md:text-left"
      >
        <div className="space-y-4 col-span-10 md:col-span-5">
          <h3 className="uppercase font-red-hat">{data.subHeading}</h3>
          <h2 className="text-primary text-xl-32">{data.heading}</h2>
          <div className="md:hidden">
            {data.image?.asset && <StyledImage imgURL={data.image as Image} />}
          </div>
          <div className="font-red-hat space-y-4">
            <PortableText value={data.body as TypedObject[]} />
          </div>
          <Button
            className="!mt-11"
            variant={data.button?.variant ?? "primary"}
          >
            <Link href={data.button?.href ?? "/"}>{data.button?.label}</Link>
          </Button>
        </div>
        <div className="spacer"></div>
        <div className="hidden md:block col-span-4 h-full content-center">
          {data.image?.asset && <StyledImage imgURL={data.image as Image} />}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default AboutUs;
