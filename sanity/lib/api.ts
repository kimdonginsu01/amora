import {
  AboutUs,
  ContactInfo,
  FooterBanner,
  Hero,
  MainTestimonial,
  Menu,
  Offers,
  Services,
} from "@/sanity.types";
import * as queries from "@/sanity/lib/queries";
import { client } from "./client";

export const getMenus = async () => {
  const menu = await client.fetch<Menu[]>(
    queries.getMenuQuery,
    {},
    { cache: "no-cache" }
  );
  return menu;
};

export const getSocialMedias = async () => {
  const data = await client.fetch<ContactInfo[]>(
    queries.getSocialMediasQuery,
    {},
    { cache: "no-cache" }
  );
  return data;
};

export const getFooterContactInfo = async () => {
  const data = await client.fetch<ContactInfo[]>(
    queries.getFooterContactInfoQuery,
    {},
    { cache: "no-cache" }
  );
  return data;
};

export const getHomePageBanner = async () => {
  const data = await client.fetch<Hero>(
    queries.getHomePageBannerQuery,
    {},
    { cache: "no-cache" }
  );

  return data;
};

export const getHomePageAboutUs = async () => {
  const data = await client.fetch<AboutUs>(
    queries.getHomePageAboutUsQuery,
    {},
    { cache: "no-cache" }
  );
  return data;
};

export const getHomePageOffer = async () => {
  const data = await client.fetch<Offers>(
    queries.getHomePageOfferQuery,
    {},
    { cache: "no-cache" }
  );
  return data;
};

export const getPopularServices = async () => {
  const data = await client.fetch<Services>(
    queries.getPopularServicesQuery,
    {},
    { cache: "no-cache" }
  );
  return data;
};

export const getMainServices = async () => {
  const data = await client.fetch<{ headings: any; services: Services[] }>(
    queries.getMainServiceQuery,
    {},
    { cache: "no-cache" }
  );
  return data;
};

export const getHomePageTestimonial = async () => {
  const data = await client.fetch<MainTestimonial>(
    queries.getHomePageTestimonialQuery,
    {},
    { cache: "no-cache" }
  );
  return data;
};

export const getFooterBanner = async () => {
  const data = await client.fetch<FooterBanner>(
    queries.getFooterBannerQuery,
    {},
    { cache: "no-cache" }
  );
  return data;
};

export const getHomePageContactInfo = async () => {
  const data = await client.fetch<ContactInfo[]>(
    queries.getHomePageContactInfoQuery,
    {},
    { cache: "no-cache" }
  );
  return data;
};
