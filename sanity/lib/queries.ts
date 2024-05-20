import { groq } from "next-sanity";

export const homePageId = "d0ea95e0-4d11-4406-8cf5-01134ad272a1";
export const servicePageId = "2611e23c-024e-4f0e-8969-307b29c95021";
export const aboutUsPageId = "c2a8e1f5-0a1c-497c-9902-a1f71b669d3f";
export const contactUsPageId = "96131158-5d92-499f-ace4-784a053b5d58";
const whatsAppId = "524f47be-2f69-4eaf-9c36-80b5b172dba4";
const phoneId = "5393bffa-ca82-41f1-9fdf-ff97825d6a3e";
const addressId = "1b97844b-c2bb-4926-8cf7-21dc3c323e7c";

export const getFooterBannerQuery = groq`
    *[_type == "footerBanner"][0] {
        content,
        banner,
    }
`;

export const getFooterContactInfoQuery = groq`
    *[_type == "contactInfo" && _id in ["${phoneId}", "${addressId}"]] {
        details,
    }
`;

export const getSocialMediasQuery = groq`
    *[_type == "contactInfo" && isSocial == true] {
        icon,
        href,
    }
`;

export const getHomePageBannerQuery = groq`
    *[_type == "page" && _id == "${homePageId}"][0]
    .pageBuilder[_type == "hero"][0]  {
        image,
        heading,
        subHeading,
        buttons[] {
        label, href, openNewTab, variant
        }
    }
`;

export const getHomePageAboutUsQuery = groq`
    *[_type == "page" && _id == "${homePageId}"][0]
    .pageBuilder[_type == "aboutUs"][0]  {
        image,
        heading,
        subHeading,
        body,
        button {
            label, variant, link -> {
                slug
            }
        }
    }
`;

export const getHomePageOfferQuery = groq`
    *[_type == "page" && _id == "${homePageId}"][0]
    .pageBuilder[_type == "offers"][0]  {
        subHeading,
        heading,
        description,
        offers[]-> {
            discount,
            image,
            title,
            excerpt,
            slug,
        }
    }
`;

export const getPopularServicesQuery = groq`
    *[_type == "page" && _id == "${homePageId}"][0]
    .pageBuilder[_type == "services"][0] {
        subHeading,
        heading,
        description,
        popularServices[0...4]-> {
            image,
            title,
            slug,
            excerpt,
            pricings[] {
                time,
                price
            }
        }
    }
`;

export const getMainServiceQuery = groq`
    {
        "headings": *[_type == "page" && _id == "${servicePageId}"][0]
                        .pageBuilder[_type == "mainServices"][0] {
            subHeading,
            heading,
        },
        "services": *[_type == "serviceCard"] {
            image,
            title,
            slug,
            excerpt,
            pricings[] {
                time,
                price
            }
        }
    }
`;

export const getHomePageTestimonialQuery = groq`
    *[_type == "page" && _id == "${homePageId}"][0]
    .pageBuilder[_type == "testimonial"][0] {
        subHeading,
        heading,
        description,
        testimonials[]-> {
            clientName,
            clientAvatar,
            content,
        }
    }
`;

export const getMenuQuery = groq`
    *[_type == "menu"] | order(_createdAt asc) {
        title,
        slug,
    }
`;

export const getHomePageContactInfoQuery = groq`
    *[_type == "contactInfo" && _id in ["${whatsAppId}", "${phoneId}"] && withAction == true] {
        title,
        icon,
        href,
    }
`;

export const getMinimalHeroQuery = groq`
    *[_type == "page" && _id == $pageId][0]
    .pageBuilder[_type == "minimalHero"][0] {
        image,
        heading,
    }
`;

export const getIntroductionQuery = groq`
    *[_type == "page" && _id == $pageId][0]
    .pageBuilder[_type == "introduction"][0] {
        image,
        heading,
        body,
    }
`;

export const getCustomerExpectationQuery = groq`
    *[_type == "page" && _id == $pageId][0]
    .pageBuilder[_type == "customerExpectation"][0] {
        heading,
        items[],
    }
`;

export const getLocationQuery = groq`
    *[_type == "page" && _id == $pageId][0]
    .pageBuilder[_type == "location"][0] {
        heading,
        description,
        contactInfos[]->,
        items[],
        embedMap,
    }
`;

export const getServiceDetailsQuery = groq`
    *[_type == "serviceCard" && slug.current == $slug][0] {
        title,
        image,
        excerpt,
        body,
        pricings[] {
            time,
            price
        }
    }
`;
