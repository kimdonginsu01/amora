import { defineArrayMember, defineField, defineType } from "sanity";

export const services = defineType({
  name: "services",
  type: "object",
  title: "Services",

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
    defineField({
      name: "description",
      title: "Description",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "popularServices",
      title: "Popular services",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "serviceCard" }],
        }),
      ],
      validation: (rule) => rule.required().min(4),
    }),
  ],
});
