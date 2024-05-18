import { defineArrayMember, defineField, defineType } from "sanity";

export const offers = defineType({
  name: "offers",
  type: "object",
  title: "Offers",

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
      name: "offers",
      title: "Offers",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "serviceCard" }],
          options: {
            filter: "isDiscounted == $isDiscounted",
            filterParams: { isDiscounted: true },
          },
        }),
      ],
      validation: (rule) => rule.required().min(4),
    }),
  ],
});
