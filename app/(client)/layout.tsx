import { Menu } from "@/sanity.types";
import { getMenus, getSiteMeta } from "@/sanity/lib/api";
import type { Metadata } from "next";
import { Playfair_Display, Red_Hat_Display } from "next/font/google";
import "../globals.css";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { baseOpenGraph } from "../shared-metadata";
import { homePageId } from "@/sanity/lib/queries";

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
    template: "%s | Amora Spa Dubai",
    default: "Amora Spa Dubai | Your Oasis of Tranquility in Dubai",
  },
  description:
    "Discover the ultimate relaxation at Amora Spa Dubai. Indulge in luxurious spa treatments, rejuvenating massages, and holistic wellness services. Enjoy special offers on popular procedures. Book your appointment today!",
  openGraph: baseOpenGraph,
  twitter: {
    card: "summary_large_image",
  },
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
