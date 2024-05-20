"use client";

import React, { useState } from "react";
import Button from "./ui/Button";
import Link from "next/link";
import { Image as SImage } from "sanity";
import { ContactInfo } from "@/sanity.types";
import Image from "next/image";
import { urlForImage } from "@/sanity/lib/image";
import ModalBooking from "./ModalBooking";

interface Props {
  contactInfo: ContactInfo[];
}

const ServiceContactActions = ({ contactInfo }: Props) => {
  const [openModal, setOpenModal] = useState(false);
  return (
    <div>
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
    </div>
  );
};

export default ServiceContactActions;
