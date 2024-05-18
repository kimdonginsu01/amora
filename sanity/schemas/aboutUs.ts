import { defineField, defineType } from "sanity";

export const aboutUs = defineType({
  name: "aboutUs",
  type: "object",
  title: "About us",

  fields: [
    defineField({
      name: "subHeading",
      title: "Sub heading",
      type: "string",
    }),
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
    }),
    defineField({
      name: "image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          type: "string",
          title: "Alternative text",
        }),
      ],
    }),
    defineField({
      name: "body",
      title: "Body",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "button",
      title: "Button",
      type: "button",
    }),
  ],
});
