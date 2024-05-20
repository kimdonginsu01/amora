/**
 * ---------------------------------------------------------------------------------
 * This file has been generated by Sanity TypeGen.
 * Command: `sanity typegen generate`
 *
 * Any modifications made directly to this file will be overwritten the next time
 * the TypeScript definitions are generated. Please make changes to the Sanity
 * schema definitions and/or GROQ queries if you need to update these types.
 *
 * For more information on how to use Sanity TypeGen, visit the official documentation:
 * https://www.sanity.io/docs/sanity-typegen
 * ---------------------------------------------------------------------------------
 */

// Source: schema.json
export type SanityImagePaletteSwatch = {
  _type: "sanity.imagePaletteSwatch";
  background?: string;
  foreground?: string;
  population?: number;
  title?: string;
};

export type SanityImagePalette = {
  _type: "sanity.imagePalette";
  darkMuted?: SanityImagePaletteSwatch;
  lightVibrant?: SanityImagePaletteSwatch;
  darkVibrant?: SanityImagePaletteSwatch;
  vibrant?: SanityImagePaletteSwatch;
  dominant?: SanityImagePaletteSwatch;
  lightMuted?: SanityImagePaletteSwatch;
  muted?: SanityImagePaletteSwatch;
};

export type SanityImageDimensions = {
  _type: "sanity.imageDimensions";
  height?: number;
  width?: number;
  aspectRatio?: number;
};

export type SanityFileAsset = {
  _id: string;
  _type: "sanity.fileAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  source?: SanityAssetSourceData;
};

export type Geopoint = {
  _type: "geopoint";
  lat?: number;
  lng?: number;
  alt?: number;
};

export type FooterBanner = {
  _id: string;
  _type: "footerBanner";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  content?: string;
  banner?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
};

export type Testimonial = {
  _id: string;
  _type: "testimonial";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  clientName?: string;
  clientAvatar?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  content?: string;
};

export type ContactInfo = {
  _id: string;
  _type: "contactInfo";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  icon?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  withAction?: boolean;
  details?: Array<string>;
  href?: string;
  isSocial?: boolean;
};

export type ServiceCard = {
  _id: string;
  _type: "serviceCard";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  };
  excerpt?: string;
  body?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
  isDiscounted?: boolean;
  discount?: number;
  pricings?: Array<{
    _key: string;
  } & Pricing>;
};

export type Page = {
  _id: string;
  _type: "page";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  pageBuilder?: Array<({
    _key: string;
  } & Hero) | ({
    _key: string;
  } & AboutUs) | ({
    _key: string;
  } & Offers) | ({
    _key: string;
  } & Services) | ({
    _key: string;
  } & MainTestimonial) | ({
    _key: string;
  } & MinimalHero) | ({
    _key: string;
  } & MainServices) | ({
    _key: string;
  } & Introduction) | ({
    _key: string;
  } & CustomerExpectation) | ({
    _key: string;
  } & Location)>;
};

export type Location = {
  _type: "location";
  heading?: string;
  description?: string;
  contactInfos?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "contactInfo";
  }>;
  embedMap?: string;
};

export type CustomerExpectation = {
  _type: "customerExpectation";
  heading?: string;
  items?: Array<{
    _key: string;
  } & ExpectationItem>;
};

export type ExpectationItem = {
  _type: "expectationItem";
  icon?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
  title?: string;
  description?: string;
};

export type Introduction = {
  _type: "introduction";
  heading?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
  body?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
};

export type MainServices = {
  _type: "mainServices";
  subHeading?: string;
  heading?: string;
};

export type MinimalHero = {
  _type: "minimalHero";
  heading?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
};

export type MainTestimonial = {
  _type: "mainTestimonial";
  subHeading?: string;
  heading?: string;
  description?: string;
  testimonials?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "testimonial";
  }>;
};

export type Services = {
  _type: "services";
  subHeading?: string;
  heading?: string;
  description?: string;
  popularServices?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "serviceCard";
  }>;
};

export type Offers = {
  _type: "offers";
  subHeading?: string;
  heading?: string;
  description?: string;
  offers?: Array<{
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    _key: string;
    [internalGroqTypeReferenceTo]?: "serviceCard";
  }>;
};

export type AboutUs = {
  _type: "aboutUs";
  subHeading?: string;
  heading?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
  body?: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "normal" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "blockquote";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }>;
  button?: Button;
};

export type Hero = {
  _type: "hero";
  heading?: string;
  subHeading?: string;
  image?: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  };
  buttons?: Array<{
    _key: string;
  } & Button>;
};

export type SanityImageCrop = {
  _type: "sanity.imageCrop";
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
};

export type SanityImageHotspot = {
  _type: "sanity.imageHotspot";
  x?: number;
  y?: number;
  height?: number;
  width?: number;
};

export type SanityImageAsset = {
  _id: string;
  _type: "sanity.imageAsset";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  originalFilename?: string;
  label?: string;
  title?: string;
  description?: string;
  altText?: string;
  sha1hash?: string;
  extension?: string;
  mimeType?: string;
  size?: number;
  assetId?: string;
  uploadId?: string;
  path?: string;
  url?: string;
  metadata?: SanityImageMetadata;
  source?: SanityAssetSourceData;
};

export type SanityAssetSourceData = {
  _type: "sanity.assetSourceData";
  name?: string;
  id?: string;
  url?: string;
};

export type SanityImageMetadata = {
  _type: "sanity.imageMetadata";
  location?: Geopoint;
  dimensions?: SanityImageDimensions;
  palette?: SanityImagePalette;
  lqip?: string;
  blurHash?: string;
  hasAlpha?: boolean;
  isOpaque?: boolean;
};

export type Pricing = {
  _type: "pricing";
  time?: number;
  price?: number;
};

export type Button = {
  _type: "button";
  label?: string;
  isInternalNavigation?: boolean;
  href?: string;
  link?: {
    _ref: string;
    _type: "reference";
    _weak?: boolean;
    [internalGroqTypeReferenceTo]?: "menu";
  };
  openNewTab?: boolean;
  variant?: "primary" | "light" | "outline" | "dark";
};

export type Menu = {
  _id: string;
  _type: "menu";
  _createdAt: string;
  _updatedAt: string;
  _rev: string;
  title?: string;
  slug?: Slug;
};

export type Slug = {
  _type: "slug";
  current?: string;
  source?: string;
};
export declare const internalGroqTypeReferenceTo: unique symbol;

// Source: ./sanity/lib/queries.ts
// Variable: getFooterBannerQuery
// Query:     *[_type == "footerBanner"][0] {        content,        banner,    }
export type GetFooterBannerQueryResult = {
  content: string | null;
  banner: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  } | null;
} | null;
// Variable: getFooterContactInfoQuery
// Query:     *[_type == "contactInfo" && _id in ["5393bffa-ca82-41f1-9fdf-ff97825d6a3e", "1b97844b-c2bb-4926-8cf7-21dc3c323e7c"]] {        details,    }
export type GetFooterContactInfoQueryResult = Array<{
  details: Array<string> | null;
}>;
// Variable: getSocialMediasQuery
// Query:     *[_type == "contactInfo" && isSocial == true] {        icon,        href,    }
export type GetSocialMediasQueryResult = Array<{
  icon: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  } | null;
  href: string | null;
}>;
// Variable: getHomePageBannerQuery
// Query:     *[_type == "page" && _id == "d0ea95e0-4d11-4406-8cf5-01134ad272a1"][0]    .pageBuilder[_type == "hero"][0]  {        image,        heading,        subHeading,        buttons[] {        label, href, openNewTab, variant        }    }
export type GetHomePageBannerQueryResult = {
  image: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  } | null;
  heading: string | null;
  subHeading: string | null;
  buttons: Array<{
    label: string | null;
    href: string | null;
    openNewTab: boolean | null;
    variant: "dark" | "light" | "outline" | "primary" | null;
  }> | null;
} | null;
// Variable: getHomePageAboutUsQuery
// Query:     *[_type == "page" && _id == "d0ea95e0-4d11-4406-8cf5-01134ad272a1"][0]    .pageBuilder[_type == "aboutUs"][0]  {        image,        heading,        subHeading,        body,        button {            label, variant, link -> {                slug            }        }    }
export type GetHomePageAboutUsQueryResult = {
  image: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  } | null;
  heading: string | null;
  subHeading: string | null;
  body: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }> | null;
  button: {
    label: string | null;
    variant: "dark" | "light" | "outline" | "primary" | null;
    link: {
      slug: Slug | null;
    } | null;
  } | null;
} | null;
// Variable: getHomePageOfferQuery
// Query:     *[_type == "page" && _id == "d0ea95e0-4d11-4406-8cf5-01134ad272a1"][0]    .pageBuilder[_type == "offers"][0]  {        subHeading,        heading,        description,        offers[]-> {            discount,            image,            title,            excerpt,            slug,        }    }
export type GetHomePageOfferQueryResult = {
  subHeading: string | null;
  heading: string | null;
  description: string | null;
  offers: Array<{
    discount: number | null;
    image: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    } | null;
    title: string | null;
    excerpt: string | null;
    slug: Slug | null;
  }> | null;
} | null;
// Variable: getPopularServicesQuery
// Query:     *[_type == "page" && _id == "d0ea95e0-4d11-4406-8cf5-01134ad272a1"][0]    .pageBuilder[_type == "services"][0] {        subHeading,        heading,        description,        popularServices[0...4]-> {            image,            title,            slug,            excerpt,            pricings[] {                time,                price            }        }    }
export type GetPopularServicesQueryResult = {
  subHeading: string | null;
  heading: string | null;
  description: string | null;
  popularServices: Array<{
    image: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    } | null;
    title: string | null;
    slug: Slug | null;
    excerpt: string | null;
    pricings: Array<{
      time: number | null;
      price: number | null;
    }> | null;
  }> | null;
} | null;
// Variable: getMainServiceQuery
// Query:     {        "headings": *[_type == "page" && _id == "2611e23c-024e-4f0e-8969-307b29c95021"][0]                        .pageBuilder[_type == "mainServices"][0] {            subHeading,            heading,        },        "services": *[_type == "serviceCard"] {            image,            title,            slug,            excerpt,            pricings[] {                time,                price            }        }    }
export type GetMainServiceQueryResult = {
  headings: {
    subHeading: string | null;
    heading: string | null;
  } | null;
  services: Array<{
    image: {
      asset?: {
        _ref: string;
        _type: "reference";
        _weak?: boolean;
        [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
      };
      hotspot?: SanityImageHotspot;
      crop?: SanityImageCrop;
      _type: "image";
    } | null;
    title: string | null;
    slug: Slug | null;
    excerpt: string | null;
    pricings: Array<{
      time: number | null;
      price: number | null;
    }> | null;
  }>;
};
// Variable: getHomePageTestimonialQuery
// Query:     *[_type == "page" && _id == "d0ea95e0-4d11-4406-8cf5-01134ad272a1"][0]    .pageBuilder[_type == "testimonial"][0] {        subHeading,        heading,        description,        testimonials[]-> {            clientName,            clientAvatar,            content,        }    }
export type GetHomePageTestimonialQueryResult = null;
// Variable: getMenuQuery
// Query:     *[_type == "menu"] | order(_createdAt asc) {        title,        slug,    }
export type GetMenuQueryResult = Array<{
  title: string | null;
  slug: Slug | null;
}>;
// Variable: getHomePageContactInfoQuery
// Query:     *[_type == "contactInfo" && _id in ["524f47be-2f69-4eaf-9c36-80b5b172dba4", "5393bffa-ca82-41f1-9fdf-ff97825d6a3e"] && withAction == true] {        title,        icon,        href,    }
export type GetHomePageContactInfoQueryResult = Array<{
  title: string | null;
  icon: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  } | null;
  href: string | null;
}>;
// Variable: getMinimalHeroQuery
// Query:     *[_type == "page" && _id == $pageId][0]    .pageBuilder[_type == "minimalHero"][0] {        image,        heading,    }
export type GetMinimalHeroQueryResult = {
  image: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  } | null;
  heading: string | null;
} | null;
// Variable: getIntroductionQuery
// Query:     *[_type == "page" && _id == $pageId][0]    .pageBuilder[_type == "introduction"][0] {        image,        heading,        body,    }
export type GetIntroductionQueryResult = {
  image: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    alt?: string;
    _type: "image";
  } | null;
  heading: string | null;
  body: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }> | null;
} | null;
// Variable: getCustomerExpectationQuery
// Query:     *[_type == "page" && _id == $pageId][0]    .pageBuilder[_type == "customerExpectation"][0] {        heading,        items[],    }
export type GetCustomerExpectationQueryResult = {
  heading: string | null;
  items: Array<{
    _key: string;
  } & ExpectationItem> | null;
} | null;
// Variable: getServiceDetailsQuery
// Query:     *[_type == "serviceCard" && slug.current == $slug][0] {        title,        image,        excerpt,        body,        pricings[] {            time,            price        }    }
export type GetServiceDetailsQueryResult = {
  title: string | null;
  image: {
    asset?: {
      _ref: string;
      _type: "reference";
      _weak?: boolean;
      [internalGroqTypeReferenceTo]?: "sanity.imageAsset";
    };
    hotspot?: SanityImageHotspot;
    crop?: SanityImageCrop;
    _type: "image";
  } | null;
  excerpt: string | null;
  body: Array<{
    children?: Array<{
      marks?: Array<string>;
      text?: string;
      _type: "span";
      _key: string;
    }>;
    style?: "blockquote" | "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "normal";
    listItem?: "bullet" | "number";
    markDefs?: Array<{
      href?: string;
      _type: "link";
      _key: string;
    }>;
    level?: number;
    _type: "block";
    _key: string;
  }> | null;
  pricings: Array<{
    time: number | null;
    price: number | null;
  }> | null;
} | null;

