import { getFooterBanner } from "@/sanity/lib/api";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import { Image as SImage } from "sanity";

const FooterBanner = async () => {
  const data = await getFooterBanner();
  return (
    <div className="relative">
      {data.banner?.asset && (
        <Image
          alt="footer banner"
          src={urlForImage(data.banner as SImage)}
          className="min-h-[50svh] md:min-h-unset object-cover w-full"
          width={1440}
          height={465}
        />
      )}
      <div className="absolute top-0 right-0 bottom-0 left-0">
        <div className="max-w-content mx-auto px-4 md:px-section-x h-full flex items-center justify-center md:justify-start">
          <p
            className="text-primary
            text-center md:text-left
            text-xl-42
            max-w-[318px]"
          >
            {data.content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default FooterBanner;
