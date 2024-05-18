import { defineArrayMember, defineField, defineType } from "sanity";

export const serviceCard = defineType({
  name: "serviceCard",
  title: "Service Card",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Main image",
      type: "image",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      validation: (rule) => rule.required().max(200),
    }),
    defineField({
      name: "isDiscounted",
      title: "Is Discounted",
      type: "boolean",
    }),
    defineField({
      name: "discount",
      title: "Discount",
      type: "number",
      validation: (rule) => rule.min(1).max(100).error("Invalid number"),
      hidden: ({ document }) => !document?.isDiscounted,
    }),
    defineField({
      name: "pricings",
      title: "Pricings",
      type: "array",
      of: [
        defineArrayMember({
          name: "pricing",
          type: "pricing",
        }),
      ],
    }),
  ],
});
