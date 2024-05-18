import { type SchemaTypeDefinition } from "sanity";
import { aboutUs } from "./schemas/aboutUs";
import { heroBanner } from "./schemas/heroBanner";
import { button } from "./schemas/objects/button";
import { offers } from "./schemas/offer";
import { pageType } from "./schemas/pageType";
import { serviceCard } from "./schemas/serviceCard";
import { contactInfo } from "./schemas/contactInfo";
import { pricing } from "./schemas/objects/pricing";
import { services } from "./schemas/services";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    // Objects
    button,
    pricing,
    heroBanner,
    aboutUs,
    offers,
    services,

    // Document
    pageType,
    serviceCard,
    contactInfo,
  ],
};
