import { defineField, defineType } from "sanity";

export const button = defineType({
  name: "button",
  type: "object",
  title: "Button",

  fields: [
    defineField({
      name: "label",
      title: "Label",
      type: "string",
    }),
    defineField({
      name: "href",
      title: "Href",
      type: "string",
      validation: rule => rule.required()
    }),
    defineField({
      name: "openNewTab",
      title: "Open in new tab",
      type: "boolean",
    }),
    defineField({
      name: "variant",
      title: "Variant",
      type: "string",
      options: {
        list: ["primary", "light", "outline", "dark"],
      },
      initialValue: "primary",
    }),
  ],
});
