import { defineField, defineType } from "sanity";

export const minimalHeroBanner = defineType({
  name: "minimalHero",
  type: "object",
  title: "Minimal Hero",

  fields: [
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
  ],
});
