import { defineArrayMember, defineField, defineType } from "sanity";

export const pageType = defineType({
  name: "page",
  type: "document",
  title: "Page",
  fields: [
    defineField({ name: "title", type: "string" }),
    defineField({ name: "slug", type: "slug" }),
    defineField({
      name: "pageBuilder",
      type: "array",
      title: "Page builder",
      of: [
        defineArrayMember({
          name: "hero",
          type: "hero",
        }),
        defineArrayMember({
          name: "aboutUs",
          type: "aboutUs",
        }),
        defineArrayMember({
          name: "offers",
          type: "offers",
        }),
        defineArrayMember({
          name: "services",
          type: "services",
        }),
        defineArrayMember({
          name: "testimonial",
          type: "mainTestimonial",
        }),
        defineArrayMember({
          name: "minimalHero",
          type: "minimalHero",
        }),
        defineArrayMember({
          name: "mainServices",
          type: "mainServices",
        }),
        defineArrayMember({
          name: "introduction",
          type: "introduction",
        }),
        defineArrayMember({
          name: "customerExpectation",
          type: "customerExpectation",
        }),
        defineArrayMember({
          name: "location",
          type: "location",
        }),
      ],
      validation: (rule) => rule.required().min(1),
    }),
  ],
});
