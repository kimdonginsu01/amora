import { defineField, defineType } from "sanity";

export const pricing = defineType({
  name: "pricing",
  title: "Pricing",
  type: "object",
  fields: [
    defineField({
      name: "time",
      title: "Time in minutes",
      type: "number",
    }),
    defineField({
      name: "price",
      title: "Price in AED",
      type: "number",
    }),
  ],
});
