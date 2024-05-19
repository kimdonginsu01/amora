import { defineArrayMember, defineField, defineType } from "sanity";

export const pageType = defineType({
  name: "page",
  type: "document",
  title: "Page",
  fields: [
    defineField({ name: "title", type: "string" }),
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
        // defineArrayMember({
        //   name: "callToAction",
        //   type: "reference",
        //   to: [{ type: "promotion" }],
        // }),
      ],
      validation: (rule) => rule.required().min(1),
    }),
  ],
});
