"use client";

import { useScrollPosition } from "@/app/hooks/useSrollPosition";
import logo from "@/public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import HorizontalDevider from "./ui/HorizontalDivider";
import cn from "../utils/cn";
import { MenuIcon } from "./Icons";
import MobileMenu from "./MobileMenu";

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

const Header = () => {
  const [hideOnScroll, setHideOnScroll] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsOpen(true);
  };

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y || currPos.y >= 0;
      if (isShow !== hideOnScroll) setHideOnScroll(isShow);
    },
    [hideOnScroll]
  );

  return (
    <div
      className={`
        fixed
        z-50
        top-0
        left-0
        w-full
        transition-all
        ease-in-out duration-300
        bg-gradient-to-b
        from-primary-light
        ${!hideOnScroll ? "-translate-y-full" : ""}`}
    >
      <div
        className={cn(`
          max-w-content
          mx-auto
          flex
          justify-center md:justify-between
          items-center
          header-mobile md:min-h-header
          px-section-x
        `)}
      >
        <Link href="/">
          <Image src={logo} alt="Amora" />
        </Link>
        <div className="hidden md:block">
          {menuItems.map((menuItem) => (
            <Link
              className="p-5 font-red-hat uppercase text-white hover:text-primary transition-all ease-in-out duration-300"
              key={menuItem.path}
              href={menuItem.path}
            >
              {menuItem.title}
            </Link>
          ))}
        </div>
      </div>
      <HorizontalDevider variant="primary" />

      <div
        className="absolute right-4 top-1/2 -translate-y-1/2 p-2 md:hidden"
        onClick={handleOpenMenu}
      >
        <MenuIcon className="w-5" />
      </div>
      <MobileMenu
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        menuItems={menuItems}
        className="md:hidden"
      />
    </div>
  );
};

export default Header;
