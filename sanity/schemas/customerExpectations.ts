import { defineArrayMember, defineField, defineType } from "sanity";

export const customerExpectation = defineType({
  name: "customerExpectation",
  type: "object",
  title: "Customer Expectation",

  fields: [
    defineField({
      name: "heading",
      title: "Heading",
      type: "string",
    }),
    defineField({
      name: "items",
      title: "Items",
      type: "array",
      of: [
        defineArrayMember({
          name: "item",
          type: "expectationItem",
        }),
      ],
    }),
  ],
});
