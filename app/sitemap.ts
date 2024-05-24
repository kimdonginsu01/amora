import { getPageSlug, getServices } from "@/sanity/lib/api";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseURL = process.env.NEXT_PUBLIC_BASE_URL;
  const pageSlugs = await getPageSlug();
  const services = await getServices();

  const pageEntries = pageSlugs.map((pageSlug) => ({
    url: `${baseURL}/${pageSlug.slug?.current ?? ""}`,
    lastModified: pageSlug._updatedAt,
  }));

  const serviceEntries = services.map((service) => ({
    url: `${baseURL}/service/${service.slug?.current}`,
    lastModified: service._updatedAt,
  }));

  return [...pageEntries, ...serviceEntries];
}
