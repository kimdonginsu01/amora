import { type SchemaTypeDefinition } from "sanity";
import { aboutUs } from "./schemas/aboutUs";
import { contactInfo } from "./schemas/contactInfo";
import { footerBanner } from "./schemas/footerBanner";
import { heroBanner } from "./schemas/heroBanner";
import { mainTestimonial } from "./schemas/mainTestimonial";
import { menu } from "./schemas/menu";
import { button } from "./schemas/objects/button";
import { pricing } from "./schemas/objects/pricing";
import { offers } from "./schemas/offer";
import { pageType } from "./schemas/pageType";
import { serviceCard } from "./schemas/serviceCard";
import { services } from "./schemas/services";
import { testimonial } from "./schemas/testimonial";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Objects
    button,
    pricing,
    heroBanner,
    aboutUs,
    offers,
    services,
    mainTestimonial,

    // Document
    pageType,
    serviceCard,
    contactInfo,
    testimonial,
    footerBanner,
    menu,
  ],
};
