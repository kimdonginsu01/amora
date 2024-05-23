import { Menu } from "@/sanity.types";
import Link from "next/link";
import { Dispatch, HTMLAttributes, SetStateAction } from "react";
import cn from "../utils/cn";
import { CloseIcon } from "./Icons";

interface Props extends HTMLAttributes<HTMLDivElement> {
  isOpen?: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  menuItems: Menu[];
}

const MobileMenu = ({
  isOpen,
  setIsOpen,
  menuItems,
  className,
  ...props
}: Props) => {
  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  return (
    <div
      className={cn(
        `
        fixed
        top-0
        right-0
        bottom-0
        left-0
        bg-white
        animate-slideIn
    `,
        !isOpen && "hidden",
        className
      )}
      {...props}
    >
      <ul className="pt-header-mobile pl-6">
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link
              href={`/${item.slug?.current}` ?? "#"}
              className="block p-2 text-xl"
              onClick={handleCloseMenu}
            >
              {item.title}
            </Link>
          </li>
        ))}
      </ul>

      <div className="absolute top-3 right-4 p-2">
        <CloseIcon className="w-5" onClick={handleCloseMenu} />
      </div>
    </div>
  );
};

export default MobileMenu;
