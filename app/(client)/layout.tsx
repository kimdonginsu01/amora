import { Menu } from "@/sanity.types";
import { getMenus } from "@/sanity/lib/api";
import type { Metadata } from "next";
import { Playfair_Display, Red_Hat_Display } from "next/font/google";
import "../globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-play-fair",
});

const redHat = Red_Hat_Display({
  subsets: ["latin"],
  variable: "--font-red-hat",
});

export const metadata: Metadata = {
  title: {
    template: "%s | Amora Spa",
    default: "Amora Spa"
  },
  description: "The best massage therapy in Dubai",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const menus = await getMenus();
  return (
    <html lang="en">
      <body
        className={`${playfair.className} ${playfair.variable} ${redHat.variable}`}
      >
        <Header menus={menus as Menu[]} />
        <main>{children}</main>
        <Footer theme="dark" menus={menus as Menu[]} />
      </body>
    </html>
  );
}
