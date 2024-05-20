import { defineArrayMember, defineField, defineType } from "sanity";

export const location = defineType({
  name: "location",
  type: "object",
  title: "Location",

  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "string",
    }),
    defineField({
      name: "contactInfos",
      title: "Contact infos",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "contactInfo" }],
        }),
      ],
    }),
    defineField({
      name: "embedMap",
      title: "Embed map",
      type: "text",
      validation: (rule) => rule.required(),
    }),
  ],
});
