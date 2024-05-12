"use client";

import { useScrollPosition } from "@/app/hooks/useSrollPosition";
import logo from "@/public/logo.png";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

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

  useScrollPosition(
    ({ prevPos, currPos }) => {
      const isShow = currPos.y > prevPos.y;
      if (isShow !== hideOnScroll) setHideOnScroll(isShow);
    },
    [hideOnScroll]
  );

  return (
    <div
      className={`fixed
        z-50
        top-0
        left-0
        w-full
        transition-all
        ease-in-out duration-300 
        ${!hideOnScroll ? "-translate-y-full" : ""}`}
    >
      <div className="flex justify-between items-center px-section-x min-h-header bg-gradient-to-b from-primary-light">
        <Link href="/">
          <Image src={logo} alt="Amora" />
        </Link>
        <div>
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
      <div className="h-[1px] bg-gradient-to-r from-transparent via-primary"></div>
    </div>
  );
};

export default Header;
