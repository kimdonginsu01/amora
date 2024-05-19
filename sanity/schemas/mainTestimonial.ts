import { defineArrayMember, defineField, defineType } from "sanity";

export const mainTestimonial = defineType({
  name: "mainTestimonial",
  type: "object",
  title: "Main Testimonial",

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
      name: "testimonials",
      title: "Testimonials",
      type: "array",
      of: [
        defineArrayMember({
          type: "reference",
          to: [{ type: "testimonial" }],
        }),
      ],
      validation: (rule) => rule.required().min(3),
    }),
  ],
});
