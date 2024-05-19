"use client";

import { ContactInfo, ServiceCard } from "@/sanity.types";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Image as SImage, TypedObject } from "sanity";
import ModalBooking from "./ModalBooking";
import Button from "./ui/Button";

interface Props {
  details: ServiceCard;
  contactInfo: ContactInfo[];
}

const ServiceDetails = ({ details, contactInfo }: Props) => {
  const [openModal, setOpenModal] = useState(false);

  const listItemStyle = {
    listItem: {
      bullet: ({ children }: any) => (
        <li className="ml-8 mb-1 relative">
          <span
            className="
                before:block
                before:absolute
                before:-left-4
                before:top-1/2
                before:-translate-y-1/2
                before:w-2
                before:h-2
                before:rounded-full
                before:bg-white"
          >
            {children}
          </span>
        </li>
      ),
    },
  };

  return (
    <>
      <h2 className="text-primary text-xl-32">{details.title}</h2>
      <div className="my-7 h-[1px] w-full bg-[rgb(162,136,105)]"></div>
      <PortableText
        value={details.body as TypedObject[]}
        components={listItemStyle}
      />
      <div className="my-7 h-[1px] w-full bg-[#A28869]"></div>
      <div className="flex flex-wrap-reverse md:justify-between gap-y-4">
        <Button
          variant="dark"
          className="w-full md:w-unset"
          onClick={() => setOpenModal(true)}
        >
          BOOKING NOW
        </Button>
        <div className="flex justify-center h-full w-full md:w-unset space-x-6">
          {contactInfo?.length &&
            contactInfo.map((item, index) => (
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

      <ModalBooking openModal={openModal} setOpenModal={setOpenModal} />
    </>
  );
};

export default ServiceDetails;
