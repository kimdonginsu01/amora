import logo from "@/public/logo_dark.svg";
import logoLight from "@/public/logo_lg.svg";
import Image from "next/image";
import Link from "next/link";
import HorizontalDivider from "./ui/HorizontalDivider";
import {
  InstagramIcon,
  TikTokIcon,
  WhatsAppIcon,
  XIcon,
  YoutubeIcon,
} from "./Icons";
import Button from "./ui/Button";
import SectionWrapper from "./ui/SectionWrapper";
import { HTMLAttributes } from "react";

const menuItems = [
  {
    title: "About us",
    path: "/about",
  },
  {
    title: "Service",
    path: "/service",
  },
  {
    title: "Offer",
    path: "offer",
  },
  {
    title: "Contacts",
    path: "contact",
  },
];

const socials = [
  {
    to: "",
    icon: <WhatsAppIcon className="inline-block" />,
  },
  {
    to: "",
    icon: <YoutubeIcon className="inline-block" />,
  },
  {
    to: "",
    icon: <InstagramIcon className="inline-block" />,
  },
  {
    to: "",
    icon: <TikTokIcon className="inline-block" />,
  },
  {
    to: "",
    icon: <XIcon className="inline-block" />,
  },
];

interface Props extends HTMLAttributes<HTMLDivElement> {
  theme?: "white" | "dark";
}

const Footer = ({ theme = "white" }: Props) => {
  return (
    <SectionWrapper variant={theme}>
      <div className="pt-8 pb-16">
        <div>
          <Image
            className="mx-auto"
            alt="amora"
            src={theme === "white" ? logo : logoLight}
          />
        </div>
        <div className="mt-8">
          <HorizontalDivider variant="primary" />
          <div className="py-6 text-center flex flex-col md:flex-row justify-center gap-x-10">
            {menuItems.map((menuItem) => (
              <Link
                className="inline-block p-5 font-red-hat text-2xl uppercase text-primary hover:text-black transition-all ease-in-out duration-300"
                key={menuItem.path}
                href={menuItem.path}
              >
                {menuItem.title}
              </Link>
            ))}
          </div>
          <HorizontalDivider variant="primary" />
        </div>
        <div className="font-red-hat text-center mt-8">
          <p>25 Street, 145 City Road New Town DD14, USA</p>
          <div className="mt-4 flex flex-col md:flex-row justify-center gap-x-5">
            <Link href="tel:+256214203215">+256 214 203 215</Link>
            <Link href="mailto:info@gmail.com">info@gmail.com</Link>
          </div>
        </div>
        <div className="flex flex-wrap justify-center md:justify-around mt-9 gap-x-2 gap-y-4 ">
          {socials.map((item, index) => (
            <Button
              key={index}
              variant="dark"
              className="max-w-16 flex justify-center items-center ml-unset !p-[10px]"
            >
              <span>{item.icon}</span>
            </Button>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Footer;
