import { defineField, defineType } from "sanity";

export const expectation = defineType({
  name: "expectationItem",
  type: "object",
  title: "Expectation Item",
  fields: [
    defineField({
      name: "icon",
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
      name: "title",
      title: "Title",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
  ],
});
