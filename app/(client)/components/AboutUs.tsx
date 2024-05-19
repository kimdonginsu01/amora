import { Menu } from "@/sanity.types";
import { getHomePageAboutUs } from "@/sanity/lib/api";
import { PortableText } from "@portabletext/react";
import Link from "next/link";
import { Image, TypedObject } from "sanity";
import Button from "./ui/Button";
import SectionWrapper from "./ui/SectionWrapper";
import StyledImage from "./ui/StyledImage";

const AboutUs = async () => {
  const data = await getHomePageAboutUs();

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
          <Link
            href={(data.button?.link as unknown as Menu).slug?.current ?? "/"}
          >
            <Button
              className="!mt-11"
              variant={data.button?.variant ?? "primary"}
            >
              {data.button?.label}
            </Button>
          </Link>
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
