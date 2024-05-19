import {
  AboutUs,
  ContactInfo,
  CustomerExpectation,
  FooterBanner,
  Hero,
  Introduction,
  MainTestimonial,
  Menu,
  MinimalHero,
  Offers,
  ServiceCard,
  Services,
} from "@/sanity.types";
import * as queries from "@/sanity/lib/queries";
import { client } from "./client";

export const getMenus = async () => {
  const menu = await client.fetch<Menu[]>(queries.getMenuQuery, {});
  return menu;
};

export const getSocialMedias = async () => {
  const data = await client.fetch<ContactInfo[]>(
    queries.getSocialMediasQuery,
    {}
  );
  return data;
};

export const getFooterContactInfo = async () => {
  const data = await client.fetch<ContactInfo[]>(
    queries.getFooterContactInfoQuery,
    {}
  );
  return data;
};

export const getHomePageBanner = async () => {
  const data = await client.fetch<Hero>(queries.getHomePageBannerQuery, {});

  return data;
};

export const getHomePageAboutUs = async () => {
  const data = await client.fetch<AboutUs>(queries.getHomePageAboutUsQuery, {});
  return data;
};

export const getHomePageOffer = async () => {
  const data = await client.fetch<Offers>(queries.getHomePageOfferQuery, {});
  return data;
};

export const getPopularServices = async () => {
  const data = await client.fetch<Services>(
    queries.getPopularServicesQuery,
    {}
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
    {}
  );
  return data;
};

export const getFooterBanner = async () => {
  const data = await client.fetch<FooterBanner>(
    queries.getFooterBannerQuery,
    {}
  );
  return data;
};

export const getHomePageContactInfo = async () => {
  const data = await client.fetch<ContactInfo[]>(
    queries.getHomePageContactInfoQuery,
    {}
  );
  return data;
};

export const getMinimalHero = async (pageId: string) => {
  const data = await client.fetch<MinimalHero>(queries.getMinimalHeroQuery, {
    pageId,
  });
  return data;
};

export const getServiceDetails = async (slug: string) => {
  const data = await client.fetch<ServiceCard>(
    queries.getServiceDetailsQuery,
    { slug },
    { cache: "no-cache" }
  );
  return data;
};

export const getIntroduction = async (pageId: string) => {
  const data = await client.fetch<Introduction>(queries.getIntroductionQuery, {
    pageId,
  });
  return data;
};

export const getCustomerExpectation = async (pageId: string) => {
  const data = await client.fetch<CustomerExpectation>(
    queries.getCustomerExpectationQuery,
    {
      pageId,
    }
  );
  return data;
};
