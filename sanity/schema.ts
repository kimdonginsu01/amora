import { type SchemaTypeDefinition } from "sanity";
import { aboutUs } from "./schemas/aboutUs";
import { contactInfo } from "./schemas/contactInfo";
import { customerExpectation } from "./schemas/customerExpectations";
import { footerBanner } from "./schemas/footerBanner";
import { heroBanner } from "./schemas/heroBanner";
import { introduction } from "./schemas/introduction";
import { mainServices } from "./schemas/mainServices";
import { mainTestimonial } from "./schemas/mainTestimonial";
import { menu } from "./schemas/menu";
import { minimalHeroBanner } from "./schemas/minimalHeroBanner";
import { button } from "./schemas/objects/button";
import { expectation } from "./schemas/objects/expectation";
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
    minimalHeroBanner,
    mainServices,
    introduction,
    expectation,
    customerExpectation,

    // Document
    pageType,
    serviceCard,
    contactInfo,
    testimonial,
    footerBanner,
    menu,
  ],
};
