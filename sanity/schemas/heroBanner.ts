import { defineArrayMember, defineField, defineType } from "sanity";

export const heroBanner = defineType({
  name: "hero",
  type: "object",
  title: "Hero",

  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
    }),
    defineField({
      name: "subHeading",
      title: "Sub heading",
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
      name: "buttons",
      type: "array",
      title: "Button actions",
      of: [
        defineArrayMember({
          name: "Buttons",
          type: "button",
        }),
      ],
    }),
  ],
});
