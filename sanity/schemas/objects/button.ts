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
      name: "isInternalNavigation",
      title: "Is internal navigation?",
      type: "boolean",
      initialValue: true,
    }),
    defineField({
      name: "href",
      title: "Href",
      type: "string",
      hidden: ({ parent }) => !!parent?.isInternalNavigation,
      validation: (rule) =>
        rule.custom((value, { parent }: any) =>
          !value && !parent?.isInternalNavigation ? "Required" : true
        ),
    }),
    defineField({
      name: "link",
      title: "Link to page",
      type: "reference",
      to: [{ type: "menu" }],
      hidden: ({ parent }) => !parent?.isInternalNavigation,
      validation: (rule) =>
        rule.custom((value, { parent }: any) =>
          !value && !!parent?.isInternalNavigation ? "Required" : true
        ),
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
