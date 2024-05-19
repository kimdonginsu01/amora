import logo from "@/public/logo_dark.svg";
import logoLight from "@/public/logo_lg.svg";
import { Menu } from "@/sanity.types";
import { getFooterContactInfo, getSocialMedias } from "@/sanity/lib/api";
import { urlForImage } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { HTMLAttributes } from "react";
import { Image as SImage } from "sanity";
import Button from "./ui/Button";
import HorizontalDivider from "./ui/HorizontalDivider";
import SectionWrapper from "./ui/SectionWrapper";

interface Props extends HTMLAttributes<HTMLDivElement> {
  theme?: "white" | "dark";
  menus: Menu[];
}

const Footer = async ({ theme = "white", menus }: Props) => {
  const medias = await getSocialMedias();
  const contacts = await getFooterContactInfo();
  console.log(medias, contacts);
  return (
    <SectionWrapper variant={theme}>
      <div className="pt-8 pb-16">
        <div className="flex items-center justify-center">
          <Link href="/" className="inline-block">
            <Image
              className=""
              alt="amora"
              src={theme === "white" ? logo : logoLight}
            />
          </Link>
        </div>
        <div className="mt-8">
          <HorizontalDivider variant="primary" />
          <div className="py-6 text-center flex flex-col md:flex-row justify-center gap-x-10">
            {menus.map((menuItem) => (
              <Link
                className="inline-block p-5 font-red-hat text-2xl uppercase text-primary hover:text-black transition-all ease-in-out duration-300"
                key={menuItem.slug?.current ?? "#"}
                href={menuItem.slug?.current ?? "#"}
              >
                {menuItem.title}
              </Link>
            ))}
          </div>
          <HorizontalDivider variant="primary" />
        </div>
        <div className="font-red-hat text-center mt-8 space-y-4">
          {contacts.length &&
            contacts.map((contact, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row justify-center gap-x-5"
              >
                {contact.details?.map((details, index) => (
                  <p key={index}>{details}</p>
                ))}
              </div>
            ))}
        </div>
        <div className="flex flex-wrap justify-center md:justify-around mt-9 gap-x-2 gap-y-4">
          {medias.map((item, index) => (
            <Link key={index} href={item.href ?? "#"} className="group">
              <Button
                variant="dark"
                className="ml-unset group-hover:grayscale group-hover:invert"
              >
                {item.icon?.asset && (
                  <Image
                    className="w-9 h-9 object-contain"
                    src={urlForImage(item.icon as SImage)}
                    alt={item.href ?? "social"}
                    width={35}
                    height={35}
                  />
                )}
              </Button>
            </Link>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Footer;
