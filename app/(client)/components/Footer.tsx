import logo from "@/public/logo_dark.png";
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

const Footer = () => {
  return (
    <div className="px-section-x pt-16 pb-24">
      <div>
        <Image className="mx-auto" alt="amora" src={logo} />
      </div>
      <div className="mt-8">
        <HorizontalDivider variant="primary" />
        <div className="py-6 text-center space-x-10">
          {menuItems.map((menuItem) => (
            <Link
              className="p-5 font-red-hat text-2xl uppercase text-primary hover:text-black transition-all ease-in-out duration-300"
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
        <div className="mt-4 space-x-6">
          <Link href="tel:+256214203215">+256 214 203 215</Link>
          <Link href="mailto:info@gmail.com">info@gmail.com</Link>
        </div>
      </div>
      <div className="max-w-[506px] mx-auto flex justify-between mt-9">
        {socials.map((item, index) => (
          <Button key={index} variant="dark" className="max-w-16 flex justify-center items-center">
            <span>{item.icon}</span>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Footer;
