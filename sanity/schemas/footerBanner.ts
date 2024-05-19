import { defineField, defineType } from "sanity";

export const footerBanner = defineType({
  name: "footerBanner",
  title: "Footer Banner",
  type: "document",

  fields: [
    defineField({
      name: "content",
      title: "Content",
      type: "string",
      validation: (rule) => rule.required().max(50),
    }),
    defineField({
      name: "banner",
      title: "Banner",
      type: "image",
      validation: (rule) => rule.required(),
    }),
  ],
});
