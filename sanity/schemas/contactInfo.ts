import { defineArrayMember, defineField, defineType } from "sanity";

export const contactInfo = defineType({
  name: "contactInfo",
  title: "Contact Information",
  type: "document",

  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "icon",
      title: "Icon",
      type: "image",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "withAction",
      title: "Is with action?",
      type: "boolean",
    }),
    defineField({
      name: "details",
      title: "Details",
      type: "array",
      of: [
        defineArrayMember({
          type: "string",
        }),
      ],
      hidden: ({ document }) => !!document?.withAction,
    }),
    defineField({
      name: "href",
      title: "Href",
      type: "string",
      hidden: ({ document }) => !document?.withAction,
    }),
    defineField({
      name: "isSocial",
      title: "Is social media?",
      type: "boolean",
    }),
  ],
});
