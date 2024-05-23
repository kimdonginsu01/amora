import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import { Image as SImage } from "sanity";

interface Props {
  image: SImage;
  heading: string;
}

const MinimalHero = ({ image, heading }: Props) => {
  return (
    <div className="h-[50svh] md:h-96 relative">
      <div className="bg-img-hero-banner w-full h-full absolute"></div>
      {image?.asset && (
        <Image
          src={urlForImage(image as SImage)}
          alt="Ảnh minh hoạ"
          className="w-full h-full object-cover"
          width={1600}
          height={900}
          priority
        />
      )}
      <div
        className="
        absolute
        top-1/2
        -translate-y-1/2
        left-1/2
        -translate-x-1/2
        text-5xl
        text-white
        text-center
        tracking-base"
      >
        {heading}
      </div>
    </div>
  );
};

export default MinimalHero;
