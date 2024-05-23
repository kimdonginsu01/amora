import { getHomePageBanner } from "@/sanity/lib/api";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import type { Image as SImage } from "sanity";
import Button from "./ui/Button";

const Hero = async () => {
  const data = await getHomePageBanner();

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
          <h2 className="font-red-hat md:text-lg mt-3">{data?.subHeading}</h2>
          <div className="mt-8 flex flex-wrap justify-center md:justify-start space-x-6">
            {data.buttons?.map((btn, index) => (
              <Link
                key={index}
                href={btn.href ?? "/"}
                target={btn.openNewTab ? "_blank" : "_self"}
              >
                <Button variant={btn.variant ?? "primary"}>{btn.label}</Button>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
