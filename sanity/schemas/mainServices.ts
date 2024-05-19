import { defineField, defineType } from "sanity";

export const mainServices = defineType({
  name: "mainServices",
  type: "object",
  title: "Main Services",

  fields: [
    defineField({
      name: "subHeading",
      title: "Sub heading",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
      validation: (rule) => rule.required(),
    }),
  ],
});
