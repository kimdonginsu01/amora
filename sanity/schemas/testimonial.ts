import { defineField, defineType } from "sanity";

export const testimonial = defineType({
  name: "testimonial",
  title: "Testimonial",
  type: "document",

  fields: [
    defineField({
      name: "clientName",
      title: "Client Name",
      type: "string",
      validation: (rule) => rule.required().max(30),
    }),
    defineField({
      name: "clientAvatar",
      title: "Client Avatar",
      type: "image",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "string",
      validation: (rule) => rule.required().max(100),
    }),
  ],
});
