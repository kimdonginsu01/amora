import { ContactInfo, ServiceCard as SServiceCard } from "@/sanity.types";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { Image as SImage } from "sanity";
import Button from "./ui/Button";
import HorizontalDevider from "./ui/HorizontalDivider";

interface Props {
  data?: SServiceCard;
  contacts?: ContactInfo[];
}

const ServiceCard = ({ data, contacts }: Props) => {
  return (
    <div className="border border-offer-card/40 flex flex-col">
      {data?.image?.asset && (
        <Image
          alt="service"
          src={urlForImage(data.image as SImage)}
          style={{ width: "100%" }}
          className="md:h-50svh"
          width={581}
          height={370}
        />
      )}
      <div className="p-3 md:p-8 flex-1 flex flex-col justify-between">
        <div>
          <h2 className="text-primary text-2xl font-medium">{data?.title}</h2>
          <HorizontalDevider className="mt-4" variant="dark" />
          <div className="flex flex-wrap md:justify-between font-red-hat text-light-dark mt-6">
            <p className="w-full md:w-3/5">{data?.excerpt}</p>
            <div className="mt-3 md:mt-unset">
              {data?.pricings &&
                data.pricings.map((price, index) => (
                  <div key={index} className="text-nowrap flex justify-between">
                    <span className="mr-6">{price.time} min</span>
                    <span className="font-bold">{price.price}AED</span>
                  </div>
                ))}
            </div>
          </div>
        </div>
        <div className="mt-7">
          <div className="flex flex-wrap-reverse md:justify-between gap-y-4">
            <Link
              href={"/service/" + data?.slug?.current ?? "#"}
              className="block w-full md:w-unset"
            >
              <Button variant="dark" className="w-full md:w-unset">
                READ MORE
              </Button>
            </Link>
            <div className="flex justify-center h-full w-full md:w-unset space-x-6">
              {contacts?.length &&
                contacts.map((item, index) => (
                  <Link key={index} href={item.href ?? "#"} className="block">
                    <Button className="!p-3 group" variant="dark">
                      {item.icon?.asset && (
                        <Image
                          src={urlForImage(item.icon as SImage)}
                          alt={item.title ?? ""}
                          className="group-hover:grayscale group-hover:invert"
                          width={30}
                          height={30}
                        />
                      )}
                    </Button>
                  </Link>
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
