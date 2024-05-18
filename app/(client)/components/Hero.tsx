import { Hero as SHero } from "@/sanity.types";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import type { Image as SImage } from "sanity";
import Button from "./ui/Button";

const getHeroBanner = async () => {
  const query = `
  *[_type == "page" && _id == "d0ea95e0-4d11-4406-8cf5-01134ad272a1"]
    .pageBuilder[_type == "hero"][0]  {
        image,
        heading,
        subHeading,
        buttons[] {
          label, href, openNewTab, variant
        }
    }
  `;

  const [data] = await client.fetch<SHero[]>(query);
  return data;
};

const Hero = async () => {
  const data = await getHeroBanner();

  return (
    <div className="text-center md:text-left relative">
      {data.image?.asset && (
        <Image
          alt="main hero banner"
          src={urlForImage(data.image as SImage)}
          className="h-100svh object-cover w-full"
          width={1440}
          height={820}
          priority
        />
      )}
      <div className="max-w-content mx-auto px-section-x">
        <div
          className="
        text-white
        absolute
        left-1/2 md:left-unset
        -translate-x-1/2 md:translate-x-0
        bottom-8 md:bottom-unset
        md:top-1/2
        md:-translate-y-1/2
        w-full md:w-unset md:max-w-[633px]
        "
        >
          <h1 className="font-semibold text-4xl md:text-5xl leading-hero-title">
            {data?.heading}
          </h1>
          <h3 className="font-red-hat md:text-lg mt-3">{data?.subHeading}</h3>
          <div className="mt-8 flex flex-wrap justify-center md:justify-start">
            {data.buttons?.map((btn, index) => (
              <Button variant={btn.variant ?? "primary"} key={index}>
                <Link
                  href={btn.href ?? "/"}
                  target={btn.openNewTab ? "_blank" : "_self"}
                >
                  {btn.label}
                </Link>
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
